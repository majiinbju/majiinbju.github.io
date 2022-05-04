<?php snippet('header') ?>
    <main class="main">

        <article>
            
            <div class="review-layout">

                <div class="review-info">
                    <h2 class="movie-title"><?= $page->title() ?></h2>
                    <p class="synopsis"><?= $page->synopsis() ?></p>
                    <p><?= $page->analysis()->kirbytext() ?></p> 

                    <div class="img-container">
                        <ul>
                            <?php foreach($page->images()->offset(1) as $image): ?>
                                <li>
                                    <a href="<?= $image->url() ?>">
                                        <?= $image ?>
                                    </a>
                                </li>
                            <?php endforeach ?>
                        </ul>
                    </div>

                    <div class="credits">
                        <dl>
                            <?php if ($page->director()->isNotEmpty()): ?>
                            <dd><?= $page->director() ?></dd>
                            <?php endif ?>
                        </dl>
                        <dl>
                            <?php if ($page->release()->isNotEmpty()): ?>
                            <dd><?= $page->release() ?></dd>
                            <?php endif ?>
                        </dl>
                        
                    </div>
                
            </div>

        </article>

    </main>
    
<!-- </?php snippet('footer') ?> -->

