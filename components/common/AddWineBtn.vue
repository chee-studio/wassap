<template>
  <div>
    <v-card-text style="position: fixed; top: 90%;">
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="pink"
          dark
          absolute
          top
          right
          fab
          @click.stop="dialog = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="#2c4679"
                   style="position: fixed; width: 100%;border-radius: 0;z-index: 1"
        >
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>와인 등록하기!</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
<!--            <v-btn dark text @click="dialog = false">Save</v-btn>-->
            <v-btn dark text >Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>공지</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>등록 및 동기화.</v-list-item-title>
              <v-list-item-subtitle>아래 양식으로 와인 정보를 등록해 주시면 10분 내에 동기화 되요.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>주의할 점!</v-list-item-title>
              <v-list-item-subtitle>아래 정보는 제출 후 수정할 수 없으니, 제출 전 한번 더 확인 부탁드려요.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>와인 정보</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                1
              </div>
            </v-list-item-action>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="wineInfo.date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="wineInfo.date"
                  label="확인일"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="wineInfo.date" scrollable
                             color="#2c4679">
                <v-spacer></v-spacer>
                <v-btn text color="#2c4679" @click="modal = false">Cancel</v-btn>
                <v-btn text color="#2c4679" @click="$refs.dialog.save(wineInfo.date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                2
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-text-field
                v-model="wineInfo.name"
                :rules="rules.name"
                :counter="30"
                label="와인 명(한글)"
                required
                color="#2c4679"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                3
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-subtitle>
                <v-select
                  v-model="wineInfo.vintage"
                  :items="vintages"
                  label="빈티지"
                  :disabled="wineInfo.hasVintage"
                ></v-select>

                <v-switch v-model="wineInfo.hasVintage" label="빈티지 없음" style="margin-left: 10px"/>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                4
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-subtitle>

                <v-text-field
                  v-model="wineInfo.price"
                  :rules="rules.price"
                  label="와인 가격"
                  required
                  color="#2c4679"
                ></v-text-field>

              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                5
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>용량</v-list-item-title>
              <v-list-item-subtitle>

                <v-radio-group v-model="wineInfo.capacity" row>
                  <v-radio label="750ml" value="BOTTLE"></v-radio>
                  <v-radio label="375ml" value="HALF_BOTTLE"></v-radio>
                  <v-radio label="1500ml" value="MAGNOM"></v-radio>
                </v-radio-group>

              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                6
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>확인처</v-list-item-title>
              <v-list-item-subtitle>
                <v-radio-group v-model="wineInfo.purchasePlace" column>
                  <v-radio label="로드샵(소매 샵)" value="로드샵(소매 샵)"></v-radio>
                  <v-radio label="이마트" value="이마트"></v-radio>
                  <v-radio label="이마트 트레이더스" value="이마트 트레이더스"></v-radio>
                  <v-radio label="코스트코" value="코스트코"></v-radio>
                  <v-radio label="롯데마트" value="롯데마트"></v-radio>
                  <v-radio label="홈플러스" value="홈플러스"></v-radio>
                  <v-radio label="백화점" value="백화점"></v-radio>

                  <v-text-field
                    v-model="wineInfo.purchasePlace"
                    label="기타"
                    color="#2c4679"
                    :rules="rules.purchasePlace"
                    :counter="20"
                    required
                  ></v-text-field>

                </v-radio-group>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                7
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>확인 지역</v-list-item-title>
              <v-list-item-subtitle>

                <v-radio-group v-model="wineInfo.purchaseArea" column>
                  <v-radio label="서울" value="서울"></v-radio>
                  <v-radio label="경기" value="경기"></v-radio>
                  <v-radio label="강원" value="강원"></v-radio>
                  <v-radio label="인천" value="인천"></v-radio>
                  <v-radio label="대전" value="대전"></v-radio>
                  <v-radio label="세종" value="세종"></v-radio>
                  <v-radio label="대구" value="대구"></v-radio>
                  <v-radio label="광주" value="광주"></v-radio>
                  <v-radio label="울산" value="울산"></v-radio>
                  <v-radio label="부산" value="부산"></v-radio>
                  <v-radio label="제주" value="제주"></v-radio>

                  <v-text-field
                    v-model="wineInfo.purchaseArea"
                    label="기타"
                    color="#2c4679"
                    :rules="rules.purchaseArea"
                    :counter="10"
                    required
                  ></v-text-field>

                </v-radio-group>


              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                8
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>기타 메모(비공개 항목)</v-list-item-title>
              <v-list-item-subtitle>

                <v-text-field
                  v-model="wineInfo.memo"
                  label="기타"
                  color="#2c4679"
                  :rules="rules.memo"
                  :counter="20"
                ></v-text-field>

              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <div style="font-size: 2.3rem;font-weight: 100;">
                9
              </div>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>감사합니다!</v-list-item-title>
              <v-list-item-subtitle>
                <v-checkbox v-model="agree" label="위 내용의 공유 및 활용에 동의합니다."/>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        hidden: true,
        dialog: false,
        modal: false,
        rules: {
          name: [
            v => !!v || '와인 명은 필수에요.',
            v => v.length <= 30 || '와인 명이 너무 길어요.',
          ],
          price: [
            v => !isNaN(Number(v)) || '숫자로만 입력해주세요.'
          ],
          purchasePlace: [
            v => !!v || '확인처는 필수에요.',
            v => v.length <= 20 || '확인처가 너무 길어요.',
          ],
          purchaseArea: [
            v => !!v || '확인지역은 필수에요.',
            v => v.length <= 10 || '확인지역이 너무 길어요.',
          ],
          memo: [
            v => v.length <= 20 || '메모가 너무 길어요.',
          ]
        },
        wineInfo: {
          name: '',
          date: new Date().toISOString().substr(0, 10),
          vintage: new Date().toISOString().substr(0, 4),
          hasVintage: false,
          price: '',
          capacity: 'BOTTLE',
          purchasePlace: '',
          purchaseArea: '',
          memo: '',
        },
        agree: false
      }
    },
    computed: {
      vintages() {
        let result = []
        let year = (new Date().toISOString().substr(0, 4)) * 1
        for (let i = year; i >= year - 50; i--) {
          result.push(String(i))
        }

        return result
      }
    },

    mounted() {
      let that = this
      setTimeout(function () {
        that.hidden = false
      }, 200)
    }
  }
</script>
