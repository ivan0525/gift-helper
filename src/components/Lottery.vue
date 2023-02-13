<template>
  <div class="lottery-component">
    <swiper
      class="swiper"
      direction="vertical"
      :slides-per-view="1"
      :space-between="0"
      :width="width"
      :height="height"
    >
      <swiper-slide class="swiper-slide">
        <home />
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-for="gift in gifts" :key="gift.key">
        <gift-displayer
          :name="gift.name"
          :image="gift.image"
          :description="gift.description"
        />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <turntable @success="handleTurntableSuccess" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Home from "./Lottery.Home.vue";
import GiftDisplayer from "./Lottery.GiftDisplayer.vue";
import Turntable from "./Lottery.Turntable.vue";
import { gifts as GIFTS, type IGift } from "@/gift.setting";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default defineComponent({
  name: "LotteryPage",
  components: { Home, GiftDisplayer, Turntable, Swiper, SwiperSlide },
  emits: ["show-gift"],
  setup(_, { emit }) {
    const gifts = ref<IGift[]>([]);

    function showGifts() {
      gifts.value = GIFTS;
    }

    function handleTurntableSuccess() {
      emit("show-gift");
    }

    onMounted(() => {
      showGifts();
    });

    return {
      gifts,
      handleTurntableSuccess,
      height: window.innerHeight,
      width: window.innerWidth,
    };
  },
});
</script>

<style scoped>
.lottery-component {
}
.swiper {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  height: 100%;
  width: 100%;
}
</style>
