<?php snippet('landing-header') ?>
            <ul class="reviews">
                <?php foreach ($page->children()->listed() as $review): ?>
                <li>
                    <a href="<?= $review->url() ?>">
                    <figure>
                        <?= $review->image()?>
                        <div class="review-details">
                        </div>
                    </figure>
                    </a>
                </li>
                <?php endforeach ?>
            </ul>
<?php snippet('footer') ?>
