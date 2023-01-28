<?php get_header(); ?>

<article id="page_<?= the_ID() ?>" <?= post_class() ?>>
	<?= the_content(); ?>
</article>

<?php get_footer();
