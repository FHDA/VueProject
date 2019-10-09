<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-row>
      
      Select quarter:
      <el-button>Fall</el-button>
      <el-button>Winter</el-button>
      <el-button>Spring</el-button>
      <el-button>Summer</el-button>
      
    </el-row>

    <p>
    Select department:
      <el-select v-model="value" placeholder="Select">
        <el-option-group
          v-for="group in departmentOptions"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.departmentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </p>

    
    <el-button type="primary" icon="el-icon-search">Search</el-button>


    <!--
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      
    </ul>
    -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      quarterOptions: [{
        valueQ: '选项1',
        labelQ: 'Fall'
      }, {
        valueQ: '选项2',
        labelQ: 'Winter'
      }, {
        valueQ: '选项3',
        labelQ: 'Spring'
      }, {
        valueQ: '选项4',
        labelQ: 'Summer'
      }],
      departmentOptions: [{
        label: 'A',
        departmentOptions: [{
          value: 'ACCT',
          label: 'Accounting'
        }, {
          value: 'ADMJ',
          label: 'Administration of Justice'
        }, {
          value: 'ANTH',
          label: 'Anthropology'
        }, {
          value: 'APRN',
          label: 'Automotive Apprenticeship'
        }, {
          value: 'ARTS',
          label: 'Art'
        }, {
          value: 'ASTR',
          label: 'Astronomy'
        }, {
          value: 'AUTO',
          label: 'Automotive Technology'
        }]
      }, {
        label: 'B',
        departmentOptions: [{
          value: 'BIOL',
          label: 'Biology'
        }, {
          value: 'BUS',
          label: 'Business'
        }]
      }, {
        label: 'C',
        departmentOptions: [{
          value: 'CD',
          label: 'Child Development'
        }, {
          value: 'CHEM',
          label: 'Chemistry'
        }, {
          value: 'CIS',
          label: 'Computer Information Systems'
        }, {
          value: 'CLP',
          label: 'Career Life Planning'
        }, {
          value: 'COMM',
          label: 'Communication Studies'
        }, {
          value: 'COUN',
          label: 'Counseling'
        }]
      }],
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-header, .el-footer {
  line-height: 60px;
}

.el-main {
  line-height: 100px;
}

</style>
