<?php /* Displays CMS-defined pages */ ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<section>
		<?php the_content(); ?>
	</section>
</article>
