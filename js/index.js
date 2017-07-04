$(document)
    .ready(function() {
        $(".button-collapse")
            .sideNav({ closeOnClick: true, draggable: true });
        $('.scrollspy')
            .scrollSpy({ scrollOffset: 30 });
    });
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-101094038-1', 'auto');
ga('send', 'pageview');
(function(add, cla) {
    window['UserHeatTag'] = cla;
    window[cla] = window[cla] || function() {
        (window[cla].q = window[cla].q || []).push(arguments)
    }, window[cla].l = 1 * new Date();
    var ul = document.createElement('script');
    var tag = document.getElementsByTagName('script')[0];
    ul.async = 1;
    ul.src = add;
    tag.parentNode.insertBefore(ul, tag);
})('//uh.nakanohito.jp/uhj2/uh.js', '_uhtracker');
_uhtracker({
    id: 'uhjTQLNGne'
});
try {
    clicky.init(101057759);
} catch (e) {}