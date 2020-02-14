<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="searchResult">
      quarter: {{ qtr }}, 
      department: {{ dpm }}
      
      <br>
      <div class="selected-qtr">
        <li v-for="(allData, yr_qtr) in items" :key="yr_qtr">
          {{yr_qtr}}
          <div class="selected-dpm" v-for="(courseData, departm) in allData.CourseData" :key="departm" >
            <li v-if="departm===dpm">
              Department : {{departm}}
              <tr>
                <th>CRN</th>
                <th>Course</th>
                <th>Section</th>
                <th>Campus</th>
                <th>Credit</th>
                <th>Title</th>
                <th>Days</th>
                <th>Time</th>
                <th>Capacity</th>
                <th>Active</th>
                <th>WL Cap</th>
                <th>WL Act</th>
                <th>Instructor</th>
                <th>Date</th>
                <th>Location</th>
                <!-- <th>Attribute</th> -->
                <!-- <th>Lab Time</th> -->
              </tr>
              <!-- <el-row :gutter="20">
                <el-col :span="1"><div class="grid-content bg-purple">CRN</div></el-col>
                <el-col :span="1.8"><div class="grid-content bg-purple">Course</div></el-col>
                <el-col :span="1.8"><div class="grid-content bg-purple">Section</div></el-col>
                <el-col :span="1.8"><div class="grid-content bg-purple">Campus</div></el-col>
              </el-row> -->

              <div class="selected-info" v-for="ele in courseData" :key="ele">
                <tr>
                  <td>{{ ele.CRN }}</td>
                  <td>{{ ele.Crse }}</td>
                  <td>{{ ele.Sec }}</td>
                  <td>{{ ele.Cmp }}</td>
                  <td>{{ ele.Cred }}</td>
                  <td>{{ ele.Title }}</td>
                  <td>{{ ele.Days }}</td>
                  <td>{{ ele.Time }}</td>
                  <td>{{ ele.Cap }}</td>
                  <td>{{ ele.Act }}</td>
                  <td>{{ ele["WL Cap"] }}</td>
                  <td>{{ ele["WL Act"] }}</td>
                  <td>{{ ele.Instructor }}</td>
                  <td>{{ ele.Date }}</td>
                  <td>{{ ele.Location }}</td>
                  <!-- <td>{{ ele.Attribute }}</td> -->
                  <!-- <td>{{ ele["Lab Time"] }}</td> -->
                </tr>
              </div>    
            </li>
            
          </div>
        </li>
      </div>
      
    </div>
    <!-- <router-view>
    </router-view> -->
  </div>
</template>

<script>

import yr_qtr_classList from './JSON file/2010_fall_data.json'

export default {
  name: 'Search',
  props: {
    qtr: String,
    dpm: String
  },
  data () {
    return {
      msg: 'Search Page',
      items: yr_qtr_classList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

div {
  letter-spacing: 1px;
  line-height: 2;
}

.selected-qtr {
  padding-top: 1px;
  color:black;
  /* text-align: justify; */
  align-content: center;
}

/* .selected-dpm {
  padding-top: 1px;

} */

/* .selected-dpm th {
  padding: 8px;
  width: 100px;
  text-align: left;
} */

th, td {
  /* padding: 8px; */
  width: 100px;
  text-align: left;
}

.selected-info {
  /* white-space: pre-wrap; */
  padding-top: 3px;
}

/* .selected-info td {
  padding: 8px;
  width: 100px;
  text-align: left;
} */

/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>