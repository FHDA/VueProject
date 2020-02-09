<template>
  <!-- <div class="hello"> -->
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-row>
      
      Select quarter:
      <el-button class='focus' v-on:click="setQtr('Fall')">Fall</el-button>
      <el-button class='focus' v-on:click="setQtr('Winter')">Winter</el-button>
      <el-button class='focus' v-on:click="setQtr('Spring')">Spring</el-button>
      <el-button class='focus' v-on:click="setQtr('Summer')">Summer</el-button>
    </el-row>
    <p>Selected quarter: {{ quarter }}</p>

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
    <p>Selected course: {{ course }}</p>
    <el-button type="primary" icon="el-icon-search">Search</el-button>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    setQtr(quarterName) {
      this.quarter = quarterName
    }
  },
  data() {
    return {
      quarter: '',
      course: '',
      // quarterOptions: 
      // [
      //   {
      //     valueQ: 'option1',
      //     labelQ: 'Fall'
      //   }, 
      //   {
      //     valueQ: 'option2',
      //     labelQ: 'Winter'
      //   }, 
      //   {
      //     valueQ: 'option3',
      //     labelQ: 'Spring'
      //   }, 
      //   {
      //     valueQ: 'option4',
      //     labelQ: 'Summer'
      //   }
      // ],
      departmentOptions: 
      [
        {
          label: 'A',
          departmentOptions: 
          [
            {
              value: 'ACCT',
              label: 'Accounting'
            }, 
            {
              value: 'ADMJ',
              label: 'Administration of Justice'
            }, 
            {
              value: 'ANTH',
              label: 'Anthropology'
            }, 
            {
              value: 'APRN',
              label: 'Automotive Apprenticeship'
            }, 
            {
              value: 'ARTS',
              label: 'Art'
            }, 
            {
              value: 'ASTR',
              label: 'Astronomy'
            }, 
            {
              value: 'AUTO',
              label: 'Automotive Technology'
            }
          ]
        }, 
        {
          label: 'B',
          departmentOptions: 
          [
            {
              value: 'BIOL',
              label: 'Biology'
            }, 
            {
              value: 'BUS',
              label: 'Business'
            }
          ]
        }, 
        {
          label: 'C',
          departmentOptions: 
          [
            {
              value: 'CD',
              label: 'Child Development'
            }, 
            {
              value: 'CHEM',
              label: 'Chemistry'
            },
            {
              value: 'CIS',
              label: 'Computer Information Systems'
            }, 
            {
              value: 'CLP',
              label: 'Career Life Planning'
            }, 
            {
              value: 'COMM',
              label: 'Communication Studies'
            }, 
            {
              value: 'COUN',
              label: 'Counseling'
            }
          ]
        },
        {
          label: 'D',
          departmentOptions: 
          [
            {
              value: 'DANC',
              label: 'Dance'
            }, 
            {
              value: 'DMT',
              label: 'Design and Manufacturing Technologies'
            }
          ]
        }, 
        {
          label: 'E',
          departmentOptions:
          [
            {
              value: 'ECON',
              label: 'Economics'
            },
            {
              value: 'EDAC',
              label: 'Educational Access'
            },
            {
              value: 'EDUC',
              label: 'Education'
            },
            {
              value: 'ELIT',
              label: 'English Literature'
            },
            {
              value: 'ENGR',
              label: 'Engineering'
            },
            {
              value: 'ES',
              label: 'Environmental Studies'
            },
            {
              value: 'ESCI',
              label: 'Environmental Science'
            },
            {
              value: 'ESL',
              label: 'English as a Second Language'
            },
            {
              value: 'EWRT',
              label: 'English Writing'
            }
          ]
        },
        {
          label: 'F',
          departmentOptions:
          [
            {
              value: 'F/TV',
              label: 'Film and Television'
            },
            {
              value: 'FREN',
              label: 'French'
            }
          ]
        },
        {
          label: 'G',
          departmentOptions:
          [
            {
              value: 'GEO',
              label: 'Geography'
            },
            {
              value: 'GEOL',
              label: 'Geology and Oceanography'
            },
            {
              value: 'GERM',
              label: 'German'
            },
            {
              value: 'GUID',
              labal: 'Guidance'
            }
          ]
        },
        {
          label: 'H',
          departmentOptions:
          [
            {
              value: 'HIST',
              label: 'History'
            },
            {
              value: 'HLTH',
              label: 'Health'
            },
            {
              value: 'HNDI',
              label: 'Hindi'
            },
            {
              value: 'HTEA',
              label: 'Health Technologies'
            },
            {
              value: 'HUMA',
              label: 'Human Development'
            },
            {
              value: 'HUMI',
              label: 'Humanities'
            }
          ]
        },
        {
          label: 'I',
          departmentOptions:
          [
            {
              value: 'ICS',
              label: 'Intercultural Studies'
            },
            {
              value: 'INTL',
              label: 'International Studies'
            },
            {
              value: 'ITAL',
              label: 'Italian'
            }
          ]
        },
        {
          label: 'J',
          departmentOptions:
          [
            {
              value: 'JAPN',
              label: 'Japanese'
            },
            {
              value: 'JOUR',
              label: 'Journalism'
            }
          ]
        },
        {
          label: 'K',
          departmentOptions:
          [
            {
              value: 'KNES',
              label: 'Kinesiology'
            },
            {
              value: 'KORE',
              labal: 'Korean'
            }
          ]
        },
        {
          label: 'L',
          departmentOptions:
          [
            {
              value: 'LART',
              label: 'Language Arts'
            },
            {
              value: 'LIB',
              label: 'Library'
            },
            {
              value: 'LING',
              label: 'Linguistics'
            },
            {
              value: 'LRNA',
              label: 'Learning Assistance'
            },
            {
              value: 'LS',
              label: 'Learning Strategies'
            }
          ]
        },
        {
          label: 'M',
          departmentOptions:
          [
            {
              value: 'MAND',
              label: 'Mandarin'
            },
            {
              value: 'MASG',
              label: 'Massage Therapy'
            },
            {
              value: 'MATH',
              label: 'Mathematics'
            },
            {
              value: 'MET',
              label: 'Meteorology'
            },
            {
              value: 'MUSI',
              label: 'Music'
            }
          ]
        },
        {
          label: 'N',
          departmentOptions:
          [
            {
              value: 'NURS',
              label: 'Nursing'
            },
            {
              value: 'NUTR',
              label: 'Nutrition'
            }
          ]
        },
        {
          label: 'P',
          departmentOptions:
          [
            {
              value: 'PARA',
              label: 'Paralegal Program'
            },
            {
              value: 'PE',
              label: 'Physical Education'
            },
            {
              value: 'PEA',
              label: 'Physical Education - Adapted'
            },
            {
              value: 'PERS',
              label: 'Persian'
            },
            {
              value: 'PHIL',
              label: 'Philosophy'
            },
            {
              value: 'PHTG',
              label: 'Photography'
            },
            {
              value: 'PHYS',
              label: 'Physics'
            },
            {
              value: 'POLI',
              label: 'Political Science'
            },
            {
              value: 'PSYC',
              label: 'Psychology'
            }
          ]
        },
        {
          label: 'R',
          departmentOptions:
          [
            {
              value: 'READ',
              label: 'Reading'
            },
            {
              value: 'REST',
              label: 'Real Estate'
            },
            {
              value: 'RUSS',
              label: 'Russian'
            }
          ]
        },
        {
          label: 'S',
          departmentOptions:
          [
            {
              value: 'SIGN',
              label: 'Sign Language'
            },
            {
              value: 'SKIL',
              label: 'Skills'
            },
            {
              value: 'SOC',
              label: 'Sociology'
            },
            {
              value: 'SOSC',
              label: 'Social Science'
            }, 
            {
              value: 'SPAN',
              label: 'Spanish'
            },
            {
              value: 'SPED',
              label: 'Special Education'
            }
          ]
        },
        {
          label: 'T',
          departmentOptions:
          [
            {
              value: 'THEA',
              label: 'Theatre Arts'
            }
          ]
        },
        {
          label: 'V',
          departmentOptions:
          [
            {
              value: 'VIET',
              label: 'Vietnamese'
            }
          ]
        },
        {
          label: 'W',
          departmentOptions:
          [
            {
              value: 'WMST',
              label: "Women's Studies"
            }
          ]
        }
      ],
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  background-color: #b8032c;
  /* padding: 50px; */
}

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

.focus:focus {
  /* color: darkcyan; */
  color: red;
}


</style>
