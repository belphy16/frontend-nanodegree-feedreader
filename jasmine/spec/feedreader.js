/* global expect, allFeeds */
$(function() {
    /* testing if the menu (RSS feed) contains all necessary elements.*/
    /* test suite no.1*/
    describe('RSS Feeds', function() {

        /*Checks if allFeeds is defined and is not empty.*/
        /*test 1.1*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*Checks if each allFeeds element has url defined and it the variable is not empty.*/
        /*test 1.2*/

        it('each feed has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe('');
            });
        });

        /*Checks if each allFeeds element has name defined and it the variable is not empty.*/
        /*test 1.3*/
        it('each feed has a name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe('');
            });
        });
    });




    /*Suite which checks functionality of the menu DOM element.*/
    /*Test suite 2*/
    describe('The menu', function() {


        /*Checks if the menu element is hidden at the start*/
        /*Test 2.1*/

        it('is hidden at start', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });


        /*Test that ensures the menu changes visibility when the menu icon is clicked
           and if the menu is hidden after clicking on it again.*/
        /*Test 2.2*/

        it('is visible on menu icon click', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });
    /* Suite which analyzes displayed articles.*/
    /*Test suite 3*/
    describe('Initial Entries', function() {

        /*Test checks if after loading first source of feeds, the DOM element with class
        .feed, contains at least one element with class .entry.
        To make sure that feed is fully loaded beforeEach is being defined  and 'done' function passed*/
        /*Test no.3.1*/

        var id = 0;
        beforeEach(function(done) {
            loadFeed(id, done);
        });

        it('loads at least a single element', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });


    /* Suite which analyzes displayed articles.*/
    /*Test suite no.4*/
    describe('New Feed Selection', function() {

        /*Test checks if content of .entry changes after loading diffrent sourse of feeds.
        To make sure that feed is fully loaded beforeEach is being defined  and 'done' function passed.
        afterEach make sure that the page is back to starting point.
        */
        /*Test no.4.1*/

        var $previous;
        var id = 0;


        beforeEach(function(done) {
            loadFeed(id, function() {
                $previous = $('.feed .entry').html();
                loadFeed((id + 1), function() {
                    done();
                })
            });

        });

        afterEach(function(done) {
            loadFeed(id, function() {
                done();
            })
        })

        it('content changes', function(done) {
            expect($('.feed .entry').html()).not.toEqual($previous);
            done();
        });


    });
}());
