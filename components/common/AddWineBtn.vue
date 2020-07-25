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
          @click.stop="wineAddDialog = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>

    <v-dialog persistent v-model="wineAddDialog" fullscreen hide-overlay transition="dialog-bottom-transition" id="abc">
      <v-card>
        <v-form
          ref="form"
        >
          <v-toolbar dark color="#2c4679"
                     style="position: fixed; width: 100%;border-radius: 0;z-index: 1"
          >
            <v-btn icon dark @click="finishAndClear">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>와인 등록하기!</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>

              <v-btn
                @click="saveWine"
                color="white"
                text
                style="font-size: 1rem"
              >
                저장
              </v-btn>

            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>공지</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <div style="height: 10px"/>
                <v-list-item-title>사용 방법</v-list-item-title>
                <v-list-item-subtitle>아래 양식으로 와인 정보를 등록해 주시면 WASSAP.CO 에서 즉시 검색됩니다.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>주의할 점!</v-list-item-title>
                <v-list-item-subtitle>아래 정보는 제출 후 수정할 수 없으니, 제출 전 한번 더 확인 부탁드려요!</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>와인 정보</v-subheader>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  1
                </div>
              </v-list-item-action>
              <v-list-item-content style="margin-left: 10px">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="wineInfo.purchaseDate"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="wineInfo.purchaseDate"
                      label="확인일"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="wineInfo.purchaseDate" scrollable
                                 color="#2c4679">
                    <v-spacer></v-spacer>
                    <v-btn text color="#2c4679" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="#2c4679" @click="$refs.dialog.save(wineInfo.purchaseDate)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  2
                </div>
              </v-list-item-action>
              <v-list-item-content style="margin-left: 10px">
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
                <div class="numberTitle">
                  3
                </div>
              </v-list-item-action>
              <v-list-item-content>
                <v-select
                  v-model="wineInfo.vintage"
                  :items="vintages"
                  label="빈티지"
                  :disabled="wineInfo.hasNotVintage"
                  color="#2c4679"
                  style="margin-left: 10px"
                  :rules="rules.vintage"
                  required
                ></v-select>
                <v-switch v-model="wineInfo.hasNotVintage"
                          color="#2c4679"
                          label="빈티지 없음" style="margin-left: 10px;font-size: 0.9rem"/>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  4
                </div>
              </v-list-item-action>
              <v-list-item-content>

                <v-text-field
                  v-model="wineInfo.price"
                  :rules="rules.price"
                  label="와인 가격"
                  required
                  color="#2c4679"
                  style="margin-left: 10px"
                  type="number"
                ></v-text-field>

              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  5
                </div>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title style="margin-left: 10px">용량</v-list-item-title>
                <v-list-item-subtitle>

                  <v-radio-group v-model="wineInfo.capacity"
                                 color="#2c4679"
                                 row style="margin-left: 10px">
                    <v-radio label="750ml" value="BOTTLE"></v-radio>
                    <v-radio label="375ml" value="HALF_BOTTLE"></v-radio>
                    <v-radio label="1500ml" value="MAGNOM"></v-radio>
                  </v-radio-group>

                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  6
                </div>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title style="margin-left: 10px">확인처</v-list-item-title>
                <!--              <v-list-item-subtitle>-->
                <v-radio-group v-model="wineInfo.purchasePlace"
                               color="#2c4679"
                               column style="margin-left: 10px;width: 100%">
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
                <!--              </v-list-item-subtitle>-->
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  7
                </div>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title style="margin-left: 10px">확인 지역</v-list-item-title>
                <v-list-item-subtitle>

                  <v-radio-group v-model="wineInfo.purchaseArea"
                                 color="#2c4679"
                                 column style="margin-left: 10px">
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
                <div class="numberTitle">
                  8
                </div>
              </v-list-item-action>
              <v-list-item-content>
                <v-text-field
                  v-model="wineInfo.memo"
                  label="정확한 확인처 및 기타 메모 (선택 사항 / 비공개 항목)"
                  color="#2c4679"
                  :rules="rules.memo"
                  :counter="20"
                  style="margin-left: 10px"
                ></v-text-field>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <div class="numberTitle">
                  9
                </div>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title style="margin-left: 10px"><span>공유해 주셔서 감사합니다.</span>
                  <v-icon size="1.4rem" color="#2c4679">mdi-emoticon-cool-outline</v-icon>
                </v-list-item-title>
                <v-checkbox v-model="agree"
                            color="#2c4679"
                            label="위 내용의 공유 및 활용에 동의합니다."
                            required
                            :rules="rules.agree"
                            style="margin-left: 10px;"/>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="saveDialog"
      max-width="290"
      persistent
    >
      <v-card>
        <v-card-title class="headline" style="color: #2c4679">저장 성공!</v-card-title>
        <v-card-text>
          더 등록하실 와인이 있으신가요? <br/>
          그렇다면 <kbd>확인일</kbd> <kbd>확인 지역</kbd> <kbd>확인처</kbd> <kbd>메모</kbd> <kbd>공유 여부</kbd> 를 폼에서
          유지할게요.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="#2c4679"
            text
            @click="finishAndNotClear"
          >
            네
          </v-btn>

          <v-btn
            color="#2c4679"
            text
            @click="finishAndClear"
          >
            아니요
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      bottom
    >
      아직 덜 입력된 항목이 있습니다. 확인 부탁드릴게요.
    </v-snackbar>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        hidden: true,
        wineAddDialog: false,
        saveDialog: false,
        modal: false,
        rules: {
          name: [
            v => !!v || '와인 명을 입력해 주세요.',
            v => v.length <= 30 || '와인 명이 너무 길어요.',
          ],
          price: [
            v => !!v || '와인 가격을 숫자로 입력해 주세요.',
          ],
          purchasePlace: [
            v => !!v || '확인처를 입력해 주세요.',
            v => v.length <= 20 || '확인처가 너무 길어요.',
          ],
          purchaseArea: [
            v => !!v || '확인지역을 입력해 주세요.',
            v => v.length <= 10 || '확인지역이 너무 길어요.',
          ],
          memo: [
            v => v.length <= 20 || '메모가 너무 길어요.',
          ],
          agree: [
            v => v === true || '동의 부탁드립니다!'
          ],
          vintage: [
            v => !!v || this.wineInfo.hasNotVintage || '빈티지를 선택해 주세요.'
          ]
        },
        wineInfo: {
          name: '',
          purchaseDate: new Date().toISOString().substr(0, 10),
          vintage: '',
          hasNotVintage: false,
          price: '',
          capacity: 'BOTTLE',
          purchasePlace: '',
          purchaseArea: '',
          memo: '',
        },
        agree: false,

        snackbar: false,
        text: 'My timeout is set to 2000.',
        timeout: 2000,
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
    methods: {
      saveWine() {
        if (this.$refs.form.validate()) {
          if (this.wineInfo.hasNotVintage === true) {
            this.wineInfo.vintage = null
          }
          this.$store.dispatch('winesStore/saveWine', this.wineInfo)
          this.saveDialog = true
        } else {
          this.snackbar = true
        }
      },
      finishAndClear() {
        this.wineInfo = {
          name: '',
          purchaseDate: new Date().toISOString().substr(0, 10),
          vintage: '',
          hasNotVintage: false,
          price: '',
          capacity: 'BOTTLE',
          purchasePlace: '',
          purchaseArea: '',
          memo: '',
        }
        this.agree = false
        this.wineAddDialog = false
        this.saveDialog = false
        this.$refs.form.resetValidation()
        document.getElementsByClassName("v-dialog")[0].scrollTop = 0
      },
      finishAndNotClear() {
        this.wineInfo = {
          name: '',
          purchaseDate: this.wineInfo.purchaseDate,
          vintage: '',
          hasNotVintage: false,
          price: '',
          capacity: 'BOTTLE',
          purchasePlace: this.wineInfo.purchasePlace,
          purchaseArea: this.wineInfo.purchaseArea,
          memo: this.wineInfo.memo,
        }
        this.saveDialog = false
        this.$refs.form.resetValidation()
        document.getElementsByClassName("v-dialog")[0].scrollTop = 0
      },
    },

    mounted() {
      let that = this
      setTimeout(function () {
        that.hidden = false
      }, 200)
    }
  }
</script>

<style scoped>
  .numberTitle {
    font-size: 2.3rem;
    font-weight: 100;
    color: gray;
    text-align: center;
    width: 60px;
  }
</style>
