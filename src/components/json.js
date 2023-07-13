{"בראשית": {1: "בראשית"},
             {2: "נח"},
             {3: "לך-לך"},
             {4: "וירא"},
             {5: "חיי-שרה"}}
             
{"שמות":    {1: "שמות"},
             {2: "וארא"},
             {3: "בא"},
             {4: "בשלח"},
             {5: "יתרו"}}


             <md-menu md-direction="bottom-end" :md-close-on-select="true">
             <md-button md-menu-trigger>פרשיות התורה</md-button>
             <md-menu-content>
               <md-menu
                 md-direction="bottom-start"
                 v-for="btn of btns[0]"
                 :key="btn.ID"
               >
                 <md-button md-menu-trigger>{{ btn.Name }}</md-button>
                 <md-menu-content>
                   <md-menu-item v-for="btn in btns[1]" :key="btn.ID">{{
                     btn.Name
                   }}</md-menu-item>
                 </md-menu-content>
               </md-menu>
             </md-menu-content>
           </md-menu>