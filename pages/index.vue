<template>
  <content-layout>
    <template #left-sidebar>
      <v-list class="navigation-items">
          <v-list-item-group :value="selected">
            <v-list-item
              v-for="section in sections"
              :key="section.value"
              @click="() => goToSection(section.value)"
              >{{ section.title }}</v-list-item
            >
          </v-list-item-group>
        </v-list>
    </template>
    <template #content>
      <component
            :is="section.component"
            v-for="section in sections"
            :id="`section-${section.value}`"
            :key="section.value"
            v-observe-visibility="{
              callback: (isVisible, entry) =>
                callback(isVisible, entry, section),
            }"
            :title="section.title"
          />
    </template>
    <template #right-sidebar>
      something
    </template>
  </content-layout>
</template>

<script>
import ContentLayout from '@/components/ContentLayout'
import FirstSection from '@/components/blog/test/FirstSection'
import SecondSection from '@/components/blog/test/SecondSection'
import TirdSection from '@/components/blog/test/ThirdSection'
import FourthSection from '@/components/blog/test/FourthSection'
import FifthSection from '@/components/blog/test/FifthSection'
import utils from '@/mixins/utils'
export default {
  name: 'IndexPage',
  components: { ContentLayout },
  mixins: [utils],
  data: () => ({
    sections: [
      {
        value: 0,
        title: 'Section 1',
        component: FirstSection,
        visible: false,
      },
      {
        value: 1,
        title: 'Section 2',
        component: SecondSection,
        visible: false,
      },
      {
        value: 2,
        title: 'Section 3',
        component: TirdSection,
        visible: false,
      },
      {
        value: 3,
        title: 'Section 4',
        component: FourthSection,
        visible: false,
      },
      {
        value: 4,
        title: 'Section 5',
        component: FifthSection,
        visible: false,
      },
    ],
  }),
  computed: {
    selected() {
      return this.sections.find((section) => section.visible)?.value
    },
  },
}
</script>
