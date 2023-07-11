<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-with-shadow">

    <a class="navbar-brand p-0">
<!--      <img :src="" alt="" style="min-width: 20px; max-width: 150px; height: auto;">-->
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item mr-3">
        <span class="nav-link text-secondary">
          -
        </span>
        </li>

        <li class="nav-item mr-3">
        <span class="nav-link text-secondary">
          -
        </span>
        </li>

        <li class="nav-item mr-3">
        <span class="nav-link text-secondary">
          -
        </span>
        </li>

      </ul>

      <div class="mr-auto">
        <div class="search-bar">
          <input type="text" placeholder="Search User" class="search-input">
          <button class="btn btn-sm btn-primary mr-2 ml-5 my-1" style="width: 90px;">
            <font-awesome-icon icon="search"/>
            Search
          </button>
        </div>
      </div>

      <div class="navbar-nav ml-md-0">
        <div class="navbar-nav ml-auto ml-md-0 d-flex justify-content-end">
          <div class="nav-item mr-2">
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col text-right">
                  <span class="p-0 font-weight-bold" id="fullName" style="font-size:13px;">
                    Jack Zero
                  </span>
                  </div>

                </div>
                <div class="row">
                  <div class="col text-right text-primary font-weight-bold" style="font-size: 11px;">
                    sampleEmail@gmail.com
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="form-inline">
                  <div class="form-group ">
                    <img class="img-avatar" :src="imgAvatar" alt="Avatar" style="min-width: 25px; max-width: 40px; height: auto;">
                  </div>
                  <div class="form-group ml-2">
                    <font-awesome-icon icon="chevron-down" />
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>


    </div>
  </nav>
</template>

<script>
import {vueAppMixin} from "@/mixins/vueAppMixin";
import {mapActions, mapGetters} from "vuex";
import imgAvatar from "@/assets/img_avatar.png"
import avatarIcon from "@/assets/avatar-icon.avif"

export default {
  name: "Nav",

  /** mixins **/
  mixins: [vueAppMixin,],

  data() {
    return {
      imgAvatar: imgAvatar,
      avatarIcon: avatarIcon,

    }
  },

  methods: {
    ...mapActions([]),


  },

  computed: {
    ...mapGetters([]),
  },

  created() {
  },


}
</script>

<style scoped>

.bg-blue1 {
  background: #1e3c72;
}

.bg-blue2 {
  background: #2a5298;
}

.navbar-with-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 17px 30px;
}

.img-avatar {
  border-radius: 50%;
}


.search-bar {
  display: flex;
  align-items: center;
  width: 350px;
  border: 1px solid #e1e3e8;
  border-radius: 50px; /* Adjust the value to control the circular shape */
  overflow: hidden;
}

.search-bar .search-input {
  margin-left: 15px;
  flex-grow: 1;
  border: none;
  padding: 6px;
  font-size: 14px;
  border-radius: 50px 0 0 50px; /* Adjust the value to control the circular shape */
  outline:none;
}

.search-bar .btn {
  border-radius: 50px 50px 50px 50px; /* Adjust the value to control the circular shape */
  background-color: #3657f4;
  height: 30px;
}

.search-input::placeholder {
  padding-left: 20px;
  color: #9fa5b1;
}



</style>