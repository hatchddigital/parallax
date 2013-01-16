# Parallax

A parallaxing UI tool

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/hatchddigital/parallax/master/dist/parallax.min.js
[max]: https://raw.github.com/hatchddigital/parallax/master/dist/parallax.js

In your web page:

```html
<script src="jquery.js"></script>
<script type="text/javascript" src="dist/parallax.min.js"></script>
        <script type="text/javascript">

            $(window).load(function () {
                $('.story').parallax({'speed': 3});
            });

            $(document).ready(function () {
                $('.skip-section').on('click', function (e) {
                    e.preventDefault();
                    $('body').animate({
                        scrollTop: $(this).offset().top
                    }, 1000);
                });
            });

        </script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
