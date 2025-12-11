export const GET_PINNED_GITHUB_REPOSITORIES = `
      query {
        user(login: "madalinaeleonorag") {
          pinnedItems(first: 10, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                homepageUrl
                openGraphImageUrl
                languages(first: 5) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;
