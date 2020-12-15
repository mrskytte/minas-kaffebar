<template>
  <div>
    <div class="modal-bg" @click="$emit('click')"></div>
    <div class="reservation-modal">
      <div class="close-button" @click="$emit('click')"><Close /></div>
      <form
        class="reservation-form"
        autocomplete="off"
        @submit.prevent="onSubmit"
      >
        <div class="input-wrap">
          <label for="first-name">First Name</label>
          <input
            ref="firstName"
            v-model="form.firstName"
            name="first-name"
            type="text"
            required
            @blur="() => checkValidity($refs.firstName, $refs.firstNameError)"
          />
          <p ref="firstNameError" class="error small hide">
            Fill in your first name
          </p>
        </div>

        <div class="input-wrap">
          <label for="last-name">Last Name</label
          ><input
            ref="lastName"
            v-model="form.lastName"
            name="last-name"
            type="text"
            required
            @blur="() => checkValidity($refs.lastName, $refs.lastNameError)"
          />
          <p ref="lastNameError" class="error small hide">
            Fill in your last name
          </p>
        </div>

        <div class="input-wrap">
          <label for="phone">Phone</label
          ><input
            ref="phone"
            v-model="form.phone"
            name="phone"
            type="text"
            required
            @blur="() => checkValidity($refs.phone, $refs.phoneError)"
          />
          <p ref="phoneError" class="error small hide">
            Fill in your phone number
          </p>
        </div>

        <div class="input-wrap">
          <label for="email">Email</label
          ><input
            ref="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            @blur="() => checkValidity($refs.email, $refs.emailError)"
          />
          <p ref="emailError" class="error small hide">
            {{
              form.email === ''
                ? 'Fill in your email'
                : "This doens't look like a valid email"
            }}
          </p>
        </div>

        <div class="input-wrap">
          <label for="tickets"> Number of tickets</label>
          <div class="custom-dropdown">
            <select ref="tickets" v-model="form.tickets" name="tickets">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>

        <div class="button">
          <Button
            :text="
              status === 'initial'
                ? 'Reserve'
                : status === 'sending'
                ? 'Sending'
                : 'Sent'
            "
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Close from '@/assets/close.svg?inline'
export default {
  components: {
    Close,
  },
  props: {
    event: { type: Object, required: true },
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        tickets: 1,
      },
      status: 'initial',
    }
  },
  methods: {
    onSubmit() {
      const payload = {
        event: this.event.headline,
        person: {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          phone: this.form.phone,
          email: this.form.email,
        },
        tickets: this.form.tickets,
      }
      if (
        this.$refs.firstName.validity.valid &&
        this.$refs.lastName.validity.valid &&
        this.$refs.phone.validity.valid &&
        this.$refs.email.validity.valid
      ) {
        this.status = 'sending'
        console.log(payload)
        setTimeout(() => {
          this.status = 'sent'
        }, 1000)
        setTimeout(() => {
          this.$emit('click')
        }, 1500)
      } else {
        this.checkValidity(this.$refs.firstName, this.$refs.firstNameError)
        this.checkValidity(this.$refs.lastName, this.$refs.lastNameError)
        this.checkValidity(this.$refs.phone, this.$refs.phoneError)
        this.checkValidity(this.$refs.email, this.$refs.emailError)
      }
    },
    checkValidity(field, error) {
      if (!field.validity.valid) {
        error.classList.remove('hide')
      } else {
        error.classList.add('hide')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color-black, 0.6);
  z-index: 1;
}
.reservation-modal {
  z-index: 3;
  position: fixed;
  top: 120px;
  left: 50%;
  margin-left: -47.5%;
  width: 95%;
  max-width: 600px;
  height: 80%;
  max-height: 650px;
  background-color: lighten($color: $color-greyblue, $amount: 10%);
  border-radius: 4px;
  padding: 2rem 1rem;
  overflow-x: scroll;
  @include media('>phone') {
    margin-left: -300px;
    top: calc(130px);
  }
  .close-button {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: $color-black;
    cursor: pointer;
  }
  .reservation-form {
    display: flex;
    flex-direction: column;
    position: relative;
    .input-wrap {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 32px;
    }
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }
    input {
      border: none;
      background-color: rgba(#fff, 0.3);
      padding: 8px;
    }
    .button {
      padding: 25px 0;
      margin: auto;
    }
  }
}
.custom-dropdown {
  margin-top: 8px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  // margin-bottom: 24px;
  cursor: pointer;
  width: 40%;
  select {
    width: 100%;
    background-color: transparent;
    font-size: inherit;
    border: 0;
    margin: 0;
    padding-bottom: 6px;
    border-bottom: 1px solid black;
    text-overflow: '';
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
  }

  &::after {
    /*  Custom dropdown arrow */
    content: '';
    width: 12px;
    height: 12px;
    border: 1.5px solid black;
    border-left: none;
    border-top: none;
    transform: rotate(45deg) skew(-5deg, -5deg);
    right: 1.2em;
    top: 35%;
    margin-top: -0.5em;
  }
}
.error {
  color: $color-error;
  position: absolute;
  top: calc(100%);
  &.hide {
    display: none;
  }
}
</style>
