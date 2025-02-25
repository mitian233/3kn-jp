<script setup lang="ts">
import siteConfig from "~/site.config";

useHead({
  title: "About | " + siteConfig.title,
  meta: [{ name: "og:title", content: "About | " + siteConfig.title }],
});
</script>

<template>
  <div class="min-h-[100svh] flex flex-col">
    <!--    <div class="font-['Poppins']">-->
    <!--      <h1 class="pt-4 pl-4 text-4xl font-bold tracking-[.25em]">ABOUT</h1>-->
    <!--    </div>-->
    <div
      class="flex-auto px-8 pt-8 font-['Poppins','Noto_Sans_JP'] about-container"
    >
      <h1>mikan</h1>
      <Links class="mb-10" />
      <p>Gunma, Japan</p>
      <p>
        ウェブ作品をご覧になりたい方は、「<NuxtLink to="/contents"
          >CONTENTS</NuxtLink
        >」ページへお進みください。
      </p>
      <p>
        コーディングはすべて独学。デザインコンセプトをレスポンシブなウェブアプリケーションへと具現化するのが得意です。細部にまでこだわり、クリーンなコードを徹底。オープンソースプロジェクトにも積極的に貢献し、ウェブ開発の可能性を広げています。アクセシビリティとユーザビリティを重視し、すべての人にとって使いやすいデジタル体験を追求。新しい技術を常にキャッチアップしながらスキルを磨き、フロントエンド開発の分野で価値ある貢献を目指しています。
      </p>
      <p>
        デザインと開発の橋渡しを意識し、見た目の美しさだけでなく、使いやすさやパフォーマンスの最適化にもこだわっています。ユーザーの体験を第一に考え、シンプルで直感的なインターフェースを設計することを心がけています。
      </p>
      <p>
        また、チームワークを大切にし、開発者同士のコラボレーションを通じて、より良いプロダクトを生み出すことに喜びを感じています。コードレビューや知見の共有を積極的に行い、成長し続けることをモットーとしています。
      </p>
      <p>
        現在、主にフロントエンド開発を中心に活動しており、モダンな技術スタックを活かしたパフォーマンスの高いウェブアプリケーションの開発に取り組んでいます。特に
        React や Vue を用いたインタラクティブな UI の実装が得意です。
      </p>
      <p>
        技術の進化は早く、新しいトレンドやベストプラクティスを常に学びながら、より良いソリューションを提供できるよう努めています。
      </p>
      <p>一緒に素晴らしいプロジェクトを作り上げていきましょう！</p>
      <p>
        お仕事のご依頼やお問い合わせは、下記までどうぞお気軽にご連絡ください。
      </p>
      <p style="@media (min-width: 768px) {font-size: 1.5rem}">
        <a href="mailto:i@3kn.jp">i@3kn.jp</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  p {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
    margin-bottom: 1em;
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 0.15em;
    font-weight: 600;
  }

  a {
    @apply underline;
  }

  a:hover {
    @apply opacity-50;
  }
}

@media (max-width: 768px) {
  .about-container {
    p {
      letter-spacing: 0.15em;
    }

    h1 {
      letter-spacing: 0.1em;
    }

    a {
      letter-spacing: normal;
    }
  }
}
</style>
