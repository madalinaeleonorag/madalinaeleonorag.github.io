import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchTerm: string): string {
    if (!searchTerm?.trim()) {
      return value;
    }

    const escapedSearch = this.escapeRegExp(searchTerm.trim());
    const regex = new RegExp(escapedSearch, 'gi');

    if (typeof document !== 'undefined' && typeof document.createTreeWalker === 'function') {
      const container = document.createElement('div');
      container.innerHTML = value;

      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
      const textNodes: Text[] = [];
      let currentNode = walker.nextNode();

      while (currentNode) {
        textNodes.push(currentNode as Text);
        currentNode = walker.nextNode();
      }

      textNodes.forEach((node) => {
        const text = node.nodeValue;
        if (!text || !regex.test(text)) {
          return;
        }

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        text.replace(regex, (match, offset) => {
          if (offset > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
          }

          const span = document.createElement('span');
          span.className = 'highlight';
          span.textContent = match;
          fragment.appendChild(span);

          lastIndex = offset + match.length;
          return match;
        });

        if (lastIndex < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        node.parentNode?.replaceChild(fragment, node);
      });

      return container.innerHTML;
    }

    return value.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  }

  private escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
