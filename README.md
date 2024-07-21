<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

## Cryptonight

I changed cryptonite to cryptonight as they are similar and I was unsure if I had to use the exact same name.
The documentation provided with the submission is much more extensive, interactive and better, so kindly refer to that one for a more in-depth view.

### Technologies Used

- Frontend Framework: Next.js
- Styling: Tailwind CSS + a bit of vanilla CSS
- State Management: Redux/Redux Toolkit
- Deployment: Vercel

### Features

- Homepage:

  - Global Market Cap Chart: Displays a Line graph showing the global market cap data for 3 cryptocurrencies.
  - Recently Viewed Cryptos: Displays whichever cryptos were recently viewed by the user. Data persistent throughout states
  - Watchlist: Displays the contents added in the watchlist by the user by drag and drop.
  - Top Cryptocurrencies: Displays the list of top 10 cryptocurrencies with most market cap.
  - Trending Market: Displays Top 5 cryptocurrencies with most volume traded.

- Explore Page:

  - Paginated Coin List/Grid: Displays a paginated list or grid of cryptocurrencies. Each page contains a specified number (20 items) of items with navigation to show more.
  - Navigation: Clicking on a card routes the user to the product page of the selected cryptocurrency.
  - A separately integrated search bar: Type in the queries to dynamically filter the table data based on the inputs in the search bar.
  - Same watchlist and Recently Viewed Components with state data persistence by redux store.
  - Option to add any cryptocurrency by dropping it into the watchlist.

- Product Page:

  - Displays basic information, data, and description about the selected cryptocurrency.
  - Shows a line graph of the cryptocurrency’s price over time.
  - Relevant links section: To help user learn more or join a community fellow enthusiasts of that cryptocurrency.
  - Add to watchlist button: Because drag and drop is difficult for mobile users.
  - The viewed cryptocurrency is automatically added to recently viewed table of the webapp.

- Common Header:

  - Display the application name with an animated logo.
  - Included a search bar that shows suggested cryptocurrencies as the user types.
  - An animated original logo on the left and an animated theme toggle button on the right.

- Common Footer: (extra)

  - Prompts users to try cryptonight in a fun and interesting way.
  - Integrated a custom accordion that tells an fun dialogue to make the user feel friendly and interested in the webapp.

### Extra Features

- Trash bin component to drop crypto from the watchlist to remove the crypto from it.
- Piano-like animations in the top cryptocurrencies table.
- An animated logo original logo on the left and an animated theme toggle button on the right.
- Custom animated loader for loading graphs and tables.
- Custom animated logo-based loader while routing from any page to any other
- Other minor animations like spinning crypto logo stretching heading, etc.
- Plus other brownie features mentioned in the brownie points section.

### API Integration

- Used the reliable CoinGecko API to fetch real-time data and historical data.
- Used multiple endpoints to get relavant data including “/coins/markets” , “/coins/id/market_chart” and many others.

### Brownie Point Functionalities

- Dynamic Theme Switching: A dynamic theme-switching feature that allows users to toggle between Light and Dark modes.
- Search Bar with Suggestions: Integrate a feature in the search bar that displays recently searched items as suggested items.
- Drag-and-Drop to Watchlist: Implement a drag-and-drop functionality that allows users to easily add coins to their watchlist by dragging and dropping them.

----- End Of Documentation ------

##

##

### Developer's Personal Draft/Checklist (in no particular order)

- Find out relevant libraries for graph ✅

- Find out appropriate API Key ✅

- Create Static Layout for each component ✅

- Initial setup of routes ✅

- Add drag and drop functionality somehow ✅

- Add dynamic data at the explore page ✅

- Create the single coin page ✅

- Maintain a recently viewed list through localStorage or Redux ✅

- Gotta change date to time along x axis, remove grid lines, make the graph beautiful add gradient ig. Fix the scale of theHome page graph so that the curves/slopes are more clear ✅

- Implement the Recently Viewed Component Designing and Table Data ✅

- Implement the Trending Market logic and component table ✅

- Add a unified search bar in the header itself ✅

- Include Recently Searched Items also (create a slice in redux for this) ✅

- Add loaders at all places wherever required ✅

- Remove log statements ✅

- Add some nice animations ✅

- Button to add to wishlist ✅

- Duplicate Items should not be added to wishlist ✅

- Make graphs responsive to screen sizes ✅
