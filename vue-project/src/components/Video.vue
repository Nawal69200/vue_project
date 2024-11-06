<template>
    <div class="container my-5">
        <div class="text-center mb-4">
            <h3>Vidéo du jour</h3>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <div class="ratio ratio-16x9">
                    <iframe
                        :src="videoUrl"
                        title="YouTube video player"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    data() {
        return {
            videoUrl: 'https://www.youtube.com/embed/Mkx4iRqcbr4?si=ArEwfaYzLE5BQO-g'
        };
    }
};
</script>

<style scoped>
.ratio {
    /* Ajoutez ici les styles spécifiques si nécessaire */
}
</style>
