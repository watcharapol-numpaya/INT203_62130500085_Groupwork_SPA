<template>
  <div>
     
    <base-search> </base-search>
    <ul class="grid grid-cols-4">
      <base-show-item
        v-for="gameList in gameLists"
        :key="gameList.id"
        :game-list="gameList"
      >
      </base-show-item>
    </ul>
  </div>
</template>

<script>
import BaseShowItem from "../components/base/BaseShowItem.vue";
import BaseSearch from "../components/base/BaseSearch.vue";

export default {
  components: {
    BaseShowItem,
    BaseSearch,
  },

  data() {
    return {
      gameLists: [
        {
          title: "Battlefield 5",
          src: "battlefield5.jpg",
          description:
            "นี่คือประสบการณ์การเล่น Battlefield™ V ที่สมบูรณ์ที่สุด เข้าร่วมความขัดแย้งที่ยิ่งใหญ่ที่สุดของมนุษยชาติด้วยอาวุธ พาหนะ และอุปกรณ์ต่างๆ ครบทั้งหมดรวมถึงคอนเทนต์ปรับแต่งที่ดีที่สุดของ Year 1 และ 2",
          price: 474.0,
        },
        {
          title: "Havest Moon",
          src: "harvestMoon.jpg",
          description:
            "In celebration of Harvest Moon's 20th Anniversary comes an all new Harvest Moon title for Steam! Harvest Moon: Light of Hope Special Edition! The game encompasses twenty years of the spirit that have made the franchise what it is today!",
          price: 289.0,
        },
        {
          title: "Need For Speed",
          src: "needForSpeed.jpg",
          description:
            "Need for Speed™ Payback - Deluxe Edition จะมอบความได้เปรียบในการแข่งขันให้คุณ โดดเด่นกว่าใครๆ ด้วยไอเท็มปรับแต่งสุดพิเศษและรับส่วนลดในเกม โบนัสชื่อเสียง กับ 5 Shipment เพื่อเริ่มต้นการผจญภัยของคุณ",
          price: 799.0,
        },
        {
          title: "BattleBox Theater",
          src: "battleBoxTheater.jpg",
          description:
            "Welcome to BattleBlock Theater! You’ve got no where to go but up...on stage. Play single player or co-op to free your friends and save Hatty Hattington! Jump, solve and battle your way through a mysterious theater inhabited by highly technological felines.",
          price: 239.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
        {
          title: "Dead by Daylight",
          src: "Dead-by-Daylight.jpg",
          description:
            "Dead by Daylight เป็นเกมสยองขวัญแบบผู้เล่นหลายคน (4 ต่อ 1) ซึ่งผู้เล่นหนึ่งคนจะรับบทบาทเป็นฆาตกรป่าเถื่อน และอีกสี่คนจะเล่นเป็นผู้รอดชีวิตที่พยายามหลบหนีจากฆาตกรและหลบเลี่ยงไม่ให้ถูกจับ ถูกทรมาน และถูกฆ่า",
          price: 279.0,
        },
      ],
    };
  },
};
</script>