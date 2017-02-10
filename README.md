# Aim of the project

In this project, Udacity provided a web-based application that reads RSS feeds. The project was to use Jasmine, a JavaScript test suite maintained by Pivotal Labs, to write tests for the basic functionality of the app.

# How to run

1. Download the whole repository.
2. Open the index.html in the browser.
3. Jasmine specs are displayed ,if all tests  are written correctly there should be 7 specs with 0 failures.
4. Evaluate the tests if errors occur.

# Steps taken to complete the project

1. Download Project from Git hub.
2. Open index.html and review the functionality of the application within your browser.
3. When you open the index.html scroll down to see if all specs ran successfully without any issues.
4. Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
5. Explore the Jasmine spec file in ./jasmine/spec/feedreader.js
6. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
8. Write a new test suite named "The menu".
9. Write a test that ensures the menu element is hidden by default.
10. Write a test that ensures the menu changes visibility when the menu icon is clicked.
11. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
12. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
