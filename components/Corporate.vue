<template>
 <section class="container mx-auto p-6 mb-20 items-center justify-end">
    <div class="container mx-auto">
        <p class="text-center mb-4 font-black text-3xl">Corporate</p>
        <p class="text-center text-sm uppercase mb-5">clients</p>
        <swiper 
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :loop="true"
            :autoplay="{
                    delay: 1000,
                    disableOnInteraction: true,
                    }"
            :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                    }"
            :slidesPerView="6" 
            class="container grid grid-cols-3 justify-end mySwiper">
            <swiper-slide><img src="/corporate/1.jpg" /></swiper-slide>
            <swiper-slide><img src="/corporate/2.jpg" /></swiper-slide>
            <swiper-slide><img src="/corporate/3.jpg" /></swiper-slide>
            <swiper-slide><img src="/corporate/4.jpg" /></swiper-slide>
            <swiper-slide><img src="/corporate/5.jpg" /></swiper-slide>
            <swiper-slide><img src="/corporate/6.jpg" /></swiper-slide>
            <swiper-slide><img src="/corporate/7.jpg" /></swiper-slide>
        </swiper>
    </div>
</section>
</template>

<script setup>

</script>