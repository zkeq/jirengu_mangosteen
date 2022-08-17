import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import pig from "../../assets/icons/pig.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const First = defineComponent({
  // 第一种写法：使用 slots
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={pig}></img>,
      title: () => (
        <>
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
