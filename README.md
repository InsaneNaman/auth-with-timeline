Tools:
1- Bundlephobia - Used for scanning bundle size

Libraries Used (Wanted to avoid as much as possible):
1- Normalize CSS - Famous CSS libraries uses to reset/normalise browser's default styles
2- React-hook-form - For Validation of forms. Alternatives have less examples but really hyped for @tanstack-forms. Its 3KB alternative whereas react-hook-forms add 10KB. Wanted to use that but it doesn't have good docs for now
3- Dayjs- For manipulating dates. Used this instead of date-fns because its just 2KB

What more libraries/Config can be used:
1- PostCSS- Autoprefixer - To auto support styles for older browsers
2- Eslint rules - Enforcing strict rules like Eslint-Airbnb
3- Prettier - Style configuration
4- .vscode config - If team using VSCode then all suggested plugins
5- Treeshaking third party libs - https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports
6- React-query - To fetch posts and cache results
7- react-window - For virtualisation if fetching a lot of posts

Optimization which could have been done and why I didn't do:

1- Merging Login and Signup :
Both components share some similarities and can be merged but I opted not to because making 2 different components can make it bit easy to manage for Developers. (If there are more components then making it generic and configurable through makes sense)

2- Adding button styles in global
A simple class to resuse and we can shift logic to Seperate <Button/ > component supporting different styles

3- Atomic CSS/ BEM
Avoided as scope is too small

4- Some styles in some classes being reused (Might have ended up reinventing tailwind)
I usually use atomic css libs like tailwind but wanted to build without it.

5- Using Emoji's svgs/lib
Using native emojis instead of emojis dedicated svgs. Its good for demo but different OS can produce different results
