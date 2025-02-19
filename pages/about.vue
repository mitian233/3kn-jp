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
                ウェブ作品をご覧になりたい場合は、<NuxtLink to="/contents"
                    >CONTENTS</NuxtLink
                >
                ページに移動してください。
            </p>
            <p>
                コーディングスキルはすべて独学。デザインコンセプトをレスポンシブなウェブアプリケーションに変換するのが得意。
            </p>
            <p>
                細部にまでこだわり、クリーンなコードに専念し、オープンソースプロジェクトに積極的に貢献し、ウェブ開発の限界を押し広げる。アクセシビリティとユーザビリティを推進し、包括的なデジタル体験を作成することを目指す。コラボレーションにコミットし、新しい技術に常に目を光らせ、スキルを継続的に向上させ、フロントエンド開発のダイナミックな分野に有意義な貢献をする。
            </p>
            <p>
                お仕事のご依頼やお問い合わせなど、下記までどうぞお気軽にご連絡ください。
            </p>
            <p style="@media (min-width: 768px) {font-size: 1.5rem}">
                <a href="mailto:kasumi@bangdream.moe">kasumi@bangdream.moe</a>
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
