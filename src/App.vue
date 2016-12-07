<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Form</h3>
        </div>
        <div class="panel-body">
          <form @submit.prevent="submit()" novalidate>
            <div class="form-group" :class="{ 'has-error': errors.has('email') }">
              <label class="control-label" for="email">Email address</label>
              <input name="email" type="email" class="form-control" id="email" placeholder="Email" v-validate data-rules="required|email">
              <span v-show="errors.has('email')" class="help-block">
                {{ errors.first('email') }}
              </span>
            </div>

            <div class="form-group" :class="{ 'has-error': errors.has('password') }">
              <label class="control-label" for="password">Password</label>
              <input name="password" type="password" class="form-control" id="password" placeholder="Password" v-validate data-rules="required|min:6">
              <span v-show="errors.has('password')" class="help-block" v-for="error in errors.collect('password')">
                {{ error }}
              </span>
            </div>

            <div class="form-group" :class="{ 'has-error': errors.has('age') }">
              <label class="control-label" for="age">Age</label>
              <input name="age" type="number" class="form-control" id="age" placeholder="Age" v-validate data-rules="required|age:10">
              <span v-show="errors.has('age')" class="help-block">
                {{ errors.first('age') }}
              </span>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    submit() {
      if(!this.validate()) {
        alert('Submitted')
      } else {
        alert('Not Submitted')
      }
    },
    validate() {
      this.$validator.validateAll();

      return this.errors.any();
    }
  }
}
</script>

<style>
.panel {
  margin-top: 2em;
}
</style>
