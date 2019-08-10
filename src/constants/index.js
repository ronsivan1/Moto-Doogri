import {I18nManager} from 'react-native'

I18nManager.isRTL ?
        obj = {
            title: 'בנלי TRK502X במבחן דרכים',
            subtitle: 'אחרי שרכבנו על הגרסה הרגילה, מגיעה זו המשפרת את תחום השטח ומוסיפה אבזור. האם יש לדגם ה-X את מה שצריך בשביל לתת פייט לגדולים ממנו? ',
            //subtitle: 'אחד אחד אחד אחד אחד אחד אחד חאד אחדאח אדאח דחאחד',
            carTitle1: 'גולף GTI פרפורמנס במבחן',
            carSubtitle1: `גרסת הפרפורמנס של הדור השביעי של הגולף GTI עשתה עליה שקטה (תרתי משמע) לארצנו. האם תוספת הסוסים הצנועה תעזור לה להתמודד מול ההוט-האצ' שמורידות היום לזוג הגלגלים הקדמיים קרוב ל-300 כוחות סוס, או שאולי הגולף פונה בכלל לקהל יעד אחר? `,

        } : 
        obj = {
            title: 'Benelli TRK502X Road Test',
            subtitle: 'Benelli’s TRK 502X is always game, no matter what two-wheeled adventures you have in mind. Designed to conquer almost every riding condition known to man or motorcycle, the TRK 502X has the capability of tackling dirt, sand and tarmac with similar prowess.',
            carTitle1: 'Golf GTI Performance Test',
            carSubtitle1: 'The Golf GTI’s 242bhp figure might sound a little bit conservative in 2019, especially as rivals punch significantly harder, with lower price tags. So does the Golf GTI feel in any way slow?',
        
        };
        obj['trk502x'] = 'https://www.doogri.co.il/wp-content/uploads/2019/05/IMG_3018.jpg'
        obj['golfgti'] = 'https://www.doogri.co.il/wp-content/uploads/2019/06/IMG_3182_B.jpg'

export default obj;
