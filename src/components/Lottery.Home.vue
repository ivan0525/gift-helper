<template>
  <div class="lottery-home-component full-screen">
    <img class="cloud" src="../assets/images/cloud.png" alt="" />
    <img src="../assets/images/bird.png" alt="" class="bird" />
    <img src="../assets/images/star-1.png" alt="" class="star" />
    <img src="../assets/images/star-2.png" alt="" class="star second" />
    <img class="heart" src="../assets/images/love-heart.png" alt="" />
    <div class="main">
      <h1 class="title">{{ title }}</h1>
      <p
        class="message"
        v-for="(message, index) in messages"
        :key="message.key"
        :style="{ textIndent: index * 30 + 'px' }"
      >
        {{ message.wording }}
      </p>
    </div>
    <div class="footer">
      <span>©️本活动最终解释权归</span>
      <span> {{ owner }} </span>
      <span>所有</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { homeConfig } from "../gift.setting";
export default defineComponent({
  name: "LotteryHome",
  setup() {
    const info = reactive({
      title: "",
      messages: [] as unknown[] as {
        key: string;
        wording: string;
      }[],
      owner: "",
    });

    onMounted(() => {
      const { title, messages, owner } = homeConfig;
      document.title = title;
      info.title = title;
      info.messages = messages;
      info.owner = owner;
    });
    return {
      ...toRefs(info),
    };
  },
});
</script>

<style scoped>
.lottery-home-component {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 200px 0 0 0;
}
.cloud {
  position: absolute;
  top: -22px;
  right: 0;
}
.bird {
  position: absolute;
  left: 30px;
  top: 100px;
  width: 90px;
}
.heart {
  display: block;
  margin-top: 20px;
  width: 320px;
  height: 180px;
}
.star {
  position: absolute;
  top: 160px;
  right: 50px;
}
.star.second {
  top: 350px;
  right: auto;
  left: 50px;
}
.main {
  margin-top: 20px;
  padding: 0 20px;
  text-align: left;
}
.main > .title {
  margin-bottom: 10px;
}
.main > .message {
  margin-bottom: 8px;
}
.footer {
  color: #909399;
  position: absolute;
  text-align: center;
  bottom: 8px;
  width: 100%;
}
</style>
