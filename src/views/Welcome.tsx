import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss';
import logo from '../assets/icons/mangosteen.svg';

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (<div class={s.wrapper}>
    <header>
      <img src={logo} alt="logo" />
      <h1>Mangosteen</h1>
    </header>
    <main> <RouterView /> </main>
    </div>
    )
  }
})