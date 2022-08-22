import s from './welcome.module.scss';
export const Third = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#chart'></use>
      </svg>
      <h2>数据可视化<br />收支一目了然</h2>
    </div>
  )
}

Third.displayName = 'Third'