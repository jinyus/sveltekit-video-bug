<script>
	/**
	 * @type {{ id: number; }}
	 */
	export let data;
</script>

<h1>Video{data.id}</h1>
<div id="video-wrapper">
	<video id="player" controls playsinline poster="https://media.vimejs.com/poster.png">
		<source src={data.url} type="video/mp4" />
	</video>
</div>

<p>Seek to the middle of the video then navigate to the next page.</p>

{#if data.id < 3}
	<h1>
		<a href="/video/{data.id + 1}">Next Video</a>
	</h1>
{/if}
{#if data.id > 1}
	<h1>
		<a href="/video/{data.id - 1}">Prev Video</a>
	</h1>
{/if}

<style>
	video {
		width: 100%;
	}
	#video-wrapper {
		max-width: 1000px;
		margin: auto;
	}

	h1 {
		text-align: center;
	}

	p {
		text-align: center;
	}
</style>
