<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!-- "$site" object contains the information of site.txt -->
     <title><?= $site->title() ?></title>
     <link rel="shortcut icon" href="/assets/icon/black-lodge-icon.ico" type="image/x-icon">
     <!-- Linking a css file with "css()" function -->
     <?= css('/assets/css/zig-zag.css') ?>
     <?= css('/assets/css/index.css') ?>
     <!-- auto selector will look for project template -->
     <?= css('@auto') ?>
 </head>
 <body>
    <div class="landing zig-zag-1">
    </div>
    <div class="landing zig-zag-2">
    </div>
    <!-- Header element for navigation and logo -->
    <header class="header">
        <!-- Anchor element with the class "logo", href pointing toward home-page, content of anchor tag is site title -->
        <a class="logo" href="<?= $site->url() ?>">
            <?= $site->title() ?>
        </a>

        <!-- Creating a menu -->
        <nav>
            <ul class="menu">
                <!-- Site selector has children(directories), which we are rendering with the variable item -->
                <?php foreach ($site->children()->listed() as $item): ?>
                <li><a href="<?= $item->url() ?>"><?= $item->title() ?></a></li>
                <?php endforeach ?>
            </ul>
        </nav>
    </header>
