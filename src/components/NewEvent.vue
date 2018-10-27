<template>
  <section class="event-form"
           :class="{'event-form--opened' : isModalOpened}">
    <form method="#" class="event-form__form" @submit.prevent="submitRoom">
      <span class="event-form__title" v-if="!getEditState">
      Новая встреча
      </span>
      <span class="event-form__title" v-else>
      Редактировать встречу
      </span>
      <div class="event-form__block event-form__block--mr">
        <label for="theme" class="event-form__label">Тема</label>
        <input type="text" class="event-form__input"
               id="theme"
               name="theme"
               required
               placeholder="О чем будете говорить?"
               v-model="currentTheme">
        <span class="event-form__error">
          {{themeValidation}}
        </span>
      </div>
      <div class="event-form__block event-form__block--mb event-form__block--flex">
        <div class="event-form__wrapper">
          <label for="date" class="event-form__label">Дата и время</label>
          <datepicker :language="language"
                      :id="'date'"
                      :value="getSelectedDate"
                      @input="changeSelectedDate"
                      :monday-first="true"
                      placeholder="Дата встречи"
                      :input-class="'event-form__input'"
                      :calendar-class="'event-form__calendar'"
                      :format="customFormatter"
                      :highlighted="{
                    days: [6, 0],
                  }">
          </datepicker>
        </div>
        <span class="event-form__error event-form__error--width">
          {{dateValidation}}
        </span>
        <div class="event-form__inner">
          <label for="start" class="event-form__label event-form__label--hidden">Начало</label>
          <input type="text" class="event-form__input"
                 id="start" placeholder="00:00"
                 v-model="startTime"
                 name="start"
                 pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                 required
                 @keypress="startTimeKeyPressed($event)">
          <span class="event-form__dash">–</span>
          <label for="end" class="event-form__label event-form__label--hidden">Конец</label>
          <input type="text" class="event-form__input" id="end"
                 placeholder="00:00"
                 v-model="endTime"
                 name="end"
                 pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                 required
                 @keypress="endTimeKeyPressed($event)">
          <span class="event-form__error event-form__error--bottom">
          {{timeValidation}}
          </span>
        </div>
      </div>
      <div class="event-form__block event-form__block--mb event-form__block--mr">
        <label for="members" class="event-form__label">Участники</label>
        <v-select @input="setSelectedMembers"
                  :value="selectedMembers"
                  id="members"
                  :options="getAllMembers"
                  multiple
                  :max-height="'136px'"
                  :placeholder="'Например, Тор Одинович'">
          <span slot="no-options">Нет участников :(</span>
          <template slot="option" slot-scope="option">
            <img :src="`../../static/img/faces/${option.avatar}.jpg`"
                 :alt="option.name"
                 class="event-form__img event-form__img--static">
            <span class="event-form__name">
              {{option.name}}
            </span>
            <span class="event-form__person-floor">
             • {{option.floor}} этаж
            </span>
          </template>
        </v-select>
        <span class="event-form__error">
          {{membersValidation}}
          </span>
        <ul class="event-form__list" v-if="getSelectedMembers.length !== 0">
          <li class="event-form__item"
              v-for="member of getSelectedMembers">
            <img :src="`../../static/img/faces/${member.avatar}.jpg`"
                 :alt="member.name"
                 class="event-form__img">
            <span class="event-form__name event-form__name--padding">{{member.name}}</span>
            <button class="event-form__button" type="button"
                    @click="deleteSelectedMember(member.name)">
              <svg width="10" height="10" class="event-form__icon">
                <use x="0" y="0" xlink:href="#icon-cross"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div class="event-form__block">
        <span class="event-form__label">Выбранная переговорка</span>
        <ul class="event-form__rooms">
          <li class="event-form__room event-form__room--selected">
            <div class="event-form__duration">
              <time class="event-form__time">{{startTime}}</time>
              –
              <time class="event-form__time">{{endTime}}</time>
            </div>
            <span class="event-form__name">{{getCurrentRoom}}</span>
            &nbsp;•&nbsp;
            <span class="event-form__floor">{{getCurrentFloor}} этаж</span>
          </li>
        </ul>
      </div>
      <div class="event-form__actions">
        <button class="event-form__btn event-form__btn--grey btn" type="button"
                @click="closeNewEventModal">Отмена
        </button>
        <button class="event-form__btn btn" type="submit"
                :class="{'event-form__btn--disabled': !isFormValid}"
                :disabled="!isFormValid">
          Создать встречу
        </button>
      </div>
    </form>
  </section>
</template>

<script>
  import Vue from 'vue';
  import moment from 'moment';
  import Datepicker from 'vuejs-datepicker';
  import { ru } from 'vuejs-datepicker/dist/locale';

  export default {
    data() {
      return {
        language: ru,
        selectedMembers: [],
        isThemeValid: false,
        isDateValid: false,
        isTimeValid: false,
        isMembersValid: false,
        id: 0,
      };
    },
    name: 'NewEvent',
    computed: {
      getEditIndex() {
        return this.$store.getters.getEditIndex;
      },
      getEditState() {
        return this.$store.getters.getEditState;
      },
      isModalOpened() {
        return this.$store.getters.getNewEventModal;
      },
      getCurrentRoom() {
        return this.$store.getters.getCurrentRoom;
      },
      getCurrentTime() {
        return this.$store.getters.getCurrentTime;
      },
      getCurrentFloor() {
        return this.$store.getters.getCurrentFloor;
      },
      getSelectedDate() {
        moment.locale('ru');
        const now = this.$store.getters.getSelectedDate;
        return moment(now).format('YYYY-MM-DD');
      },
      getStartTime() {
        return this.$store.getters.getStartTime;
      },
      getEndTime() {
        return this.$store.getters.getEndTime;
      },
      startTime: {
        get() {
          return this.getStartTime;
        },
        set(value) {
          this.$store.commit('setStartTime', value);
        },
      },
      endTime: {
        get() {
          return this.getEndTime;
        },
        set(value) {
          this.$store.commit('setEndTime', value);
        },
      },
      getAllMembers() {
        return this.$store.getters.getAllMembers;
      },
      getSelectedMembers() {
        return this.$store.getters.getSelectedMembers;
      },
      getCurrentDate() {
        const now = this.$store.getters.getCurrentDate;
        return moment(now)
          .format('YYYY-MM-DD');
      },
      currentTheme: {
        get() {
          return this.$store.getters.getCurrentTheme;
        },
        set(value) {
          this.$store.commit('setCurrentTheme', value);
        },
      },
      themeValidation() {
        if (this.currentTheme == null || this.currentTheme.length === 0) {
          this.isThemeValid = false;
          return 'Тема обязательна к заполнению';
        } else if (this.currentTheme.length < 4) {
          this.isThemeValid = false;
          return 'Тема должна состоять как минимум из 4 символов';
        }
        this.isThemeValid = true;
        return '';
      },
      dateValidation() {
        const now = new Date();
        const today = moment(now).format('YYYY-MM-DD');
        if (this.getSelectedDate === 'Invalid date') {
          this.isDateValid = false;
          return 'Необходимо выбрать дату';
        } else if (new Date(this.getSelectedDate).getTime() < new Date(today).getTime()) {
          this.isDateValid = false;
          return 'Дата должна быть больше или равна текущей';
        }
        this.isDateValid = true;
        return '';
      },
      timeValidation() {
        const reg = /([01]?[0-9]|2[0-3]):[0-5][0-9]/;
        if (this.endTime <= this.startTime) {
          this.isTimeValid = false;
          return 'Начало должно быть раньше конца';
        } else if (this.startTime <= String(new Date().getHours())) {
          this.isTimeValid = false;
          return 'Неверное время';
        } else if (!reg.test(this.startTime) || !reg.test(this.endTime)) {
          this.isTimeValid = false;
          return 'Введите время в формате ЧЧ:ММ';
        }
        this.isTimeValid = true;
        return '';
      },
      membersValidation() {
        if (this.selectedMembers.length === 0) {
          this.isMembersValid = false;
          return 'Нужно выбрать хотя бы одного участника';
        }
        this.isMembersValid = true;
        return '';
      },
      isFormValid() {
        return this.isThemeValid && this.isDateValid && this.isTimeValid && this.isMembersValid;
      },
    },
    methods: {
      customFormatter(date) {
        moment.locale('ru');
        return moment(date).format('YYYY-MM-DD');
      },
      endTimeKeyPressed(e) {
        if (this.endTime.length > 4) {
          e.target.value = this.endTime.slice(0, 4);
        }
      },
      startTimeKeyPressed(e) {
        if (this.startTime.length > 4) {
          e.target.value = this.startTime.slice(0, 4);
        }
      },
      closeNewEventModal() {
        this.$store.commit('setNewEventModal', false);
      },
      setSelectedMembers(value) {
        this.$store.commit('setSelectedMembers', value);
      },
      changeSelectedDate(value) {
        this.$store.commit('setSelectedDate', value);
      },
      deleteSelectedMember(name) {
        Object.entries(this.selectedMembers)
          .forEach(
            ([key, value]) => {
              if (value.name === name) {
                Vue.delete(this.selectedMembers, key);
              }
            },
          );
        this.$store.commit('deleteSelectedMember', name);
      },
      submitRoom() {
        if (this.getEditState) {
          this.$store.commit('updateEvent', {
            id: this.$store.getters.getCurrentEvent.id,
            floor: this.getCurrentFloor,
            room: this.getCurrentRoom,
            theme: this.currentTheme,
            date: this.getSelectedDate,
            startTime: this.getStartTime,
            endTime: this.getEndTime,
            members: this.getSelectedMembers,
          });
          this.$store.commit('setEdit', false);
          this.$store.commit('setEditIndex', null);
          this.$store.commit('setNewEventModal', false);
          this.$store.commit('setEventCreatedModal', true);
        } else {
          this.$store.commit('setNewEvent', {
            id: this.id,
            floor: this.getCurrentFloor,
            room: this.getCurrentRoom,
            theme: this.currentTheme,
            date: this.getSelectedDate,
            startTime: this.getStartTime,
            endTime: this.getEndTime,
            members: this.getSelectedMembers,
          });
          this.$store.commit('setNewEventModal', false);
          this.$store.commit('setEventCreatedModal', true);
          this.id += 1;
        }
      },
    },
    components: {
      Datepicker,
    },
  };
</script>

<style lang="less">
  .dropdown-menu {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #e9ecef;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      height: 8px;
      width: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #1d54fe;
    }

    & a:hover {
      background-color: #f5f5f5 !important;
    }

    & li:hover {
      background-color: #f5f5f5 !important;
    }

    & li.active.highlight a {
      background-color: #f5f5f5 !important;
    }

    & li.highlight a {
      background-color: #f5f5f5 !important;
    }

    & li:hover span {
      font-weight: 700;
    }
  }

  .v-select .selected-tag {
    display: none;
  }

  .v-select .dropdown-toggle {
    width: 100%;
    box-sizing: border-box;
    font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
    font-size: 15px;
    padding: 14px 10px;
    color: #000000;
    border: 2px solid #e9ecef;
    border-radius: 4px;

    &:focus,
    &:hover {
      border-color: #007dff;
    }

    @media (min-width: 1366px) {
      height: 42px;
      padding: 0;
    }
  }

  .event-form {
    display: none;
    position: fixed;
    top: 48px;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #ffffff;
    padding: 24px 16px;
    box-shadow: 0 -1px 0 0 #e9ecef;
    box-sizing: border-box;
    overflow: auto;
    padding-bottom: 216px;

    &--opened {
      display: block;
    }

    &::before {
      content: "";
      position: absolute;
      top: 304px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: #e9ecef;
    }

    &__error {
      position: absolute;
      top: 74px;
      color: red;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 10px;

      &--bottom {
        top: 140px;
      }
    }

    &__calendar {
      left: -6px;
      top: 55px;

      & .cell.highlighted {
        color: red;
        background-color: transparent;
      }

      & .cell.selected,
      & .cell.selected.highlighted {
        background-color: #0070E0;
        color: #ffffff;

        &:hover {
          background-color: #0070E0;
          color: #ffffff;
        }
      }

      & .cell {
        &:hover {
          color: #0070E0;
          border: 1px solid #0070E0 !important;
        }
      }
    }

    &__button {
      cursor: pointer;
    }

    &__person-floor {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: #858e98;
    }

    &__title {
      display: block;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #000000;
      margin-bottom: 16px;
      width: 100%;
    }

    &__block {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      position: relative;

      &--mb {
        margin-bottom: 44px;
      }
    }

    &__label {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: #000000;
      margin-bottom: 4px;

      &--hidden {
        display: none;
      }
    }

    &__input {
      width: 100%;
      box-sizing: border-box;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      padding: 14px 10px;
      color: #000000;
      border: 2px solid #e9ecef;
      border-radius: 4px;

      &:focus,
      &:hover {
        border-color: #007dff;
      }
    }

    &__inner {
      display: flex;
      align-items: center;
      margin-top: 8px;
      font-weight: 700;
    }

    &__dash {
      margin: 0 4px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
    }

    &__img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      &--static {
        position: relative;
        top: initial;
        left: initial;
        transform: none;
      }
    }

    &__item {
      display: flex;
      align-items: center;
      background-color: #e9ecef;
      border-radius: 16px;
      padding: 4px 8px;
      position: relative;
      width: max-content;
      margin-bottom: 8px;
      margin-right: 8px;
    }

    &__name {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 13px;
      color: #000000;
      padding-left: 12px;

      &--padding {
        padding-left: 24px;
        padding-right: 12px;
      }
    }

    &__rooms {
      display: flex;
      flex-direction: column;
    }

    &__room {
      display: flex;
      align-items: baseline;
      padding: 12px 14px;
      background-color: #e9ecef;
      border-radius: 4px;
      margin-bottom: 8px;
      font-size: 15px;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      color: #000000;

      &:hover,
      &--selected {
        background-color: #007dff;
        color: #ffffff;

        .event-form__name {
          color: #ffffff;
        }

        .event-form__duration {
          color: #ffffff;
        }
      }
    }

    &__duration {
      font-size: 15px;
      font-weight: 700;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      color: #000000;
    }

    &__actions {
      width: 100%;
      box-sizing: border-box;
      position: fixed;
      left: 0;
      bottom: 0;
      background-color: #ffffff;
      min-height: 80px;
      padding: 15px 60px;
      text-align: center;
    }

    &__btn {
      width: 100%;
      max-width: 238px;
      margin-bottom: 8px;

      &--grey {
        background-color: #E9ECEF;
        color: #000000;
        font-weight: 700;

        &:hover {
          background-color: #D5DFE9;
        }

        &:active {
          background-color: #98A9B9;
        }
      }

      &--disabled {
        background-color: #E5E5E5;
        color: #8B8E92;
        user-select: none;
        cursor: not-allowed;
        pointer-events: none;
      }
    }

    @media (min-width: 768px) {
      &::before,
      &::after {
        display: none;
      }

      padding-bottom: 50px;

      &__error {
        font-size: 13px;
      }

      &__title {
        text-align: center;
      }

      &__form {
        box-sizing: border-box;
        max-width: 880px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      &__block {
        min-width: 352px;
        max-width: 100%;

        &--mr {
          margin-right: 32px;
        }
      }

      &__actions {
        position: relative;
      }

      &__btn {
        width: 140px;
        margin-right: 16px;

        &--grey {
          width: 80px;
        }
      }
    }

    @media (min-width: 1366px) {
      top: 62px;

      &__error {
        top: 60px;

        &--width {
          width: 210px;
        }
      }

      &__form {
        width: 880px;
        margin: 0 auto;
      }

      &__input {
        padding: 11px 10px;
        height: 38px;
      }

      &__title {
        text-align: left;
      }

      &__block {
        width: 420px;

        &--flex {
          max-width: 428px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
        }
      }

      &__wrapper {
        margin-right: 16px;
      }

      &__inner {
        margin-top: 0;
      }
    }

  }
</style>
