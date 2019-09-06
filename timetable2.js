//let classRooms = [];
class ClassRooms{
    constructor(_id,_table){
        this._id = _id;
        this._table = _table;
    }
}
class Table{
    constructor(_days){
        this._days = _days;
    }
}
class Days{
    constructor(_days,_hours,_trainers){
        this._days = _days;
        this._hours = _hours;
        this._trainers = _trainers;
    }
}
// class Hours{
//     constructor(__hourslot,_trainers){
//         this._hourslot = _hourslot;
//         this._trainers = _trainers;
//     }
// }

class Trainers{
    constructor(_name,_subject){
        
        this._name = _name;
        this._subject = _subject;
    }
}
let hours1 =[
        
             'dummy data',
            'dummy data',
            'dummy data',
            'dummy data',
            'dummy data' 
        

    ];
// let classList = [];
// const addSubject = (_classId,_table1,_hour,_day)=>{
//     classList.forEach(cl=>{
//         if(cl._id==_classId){
//             cl.forEach(tb=>{
//                 tb.
//             });
//         }
//     }
//     );
// }
// class Hours{
//     constructor(_mon,_tue,_wed,_thu,_fri){
//         this._mon = _mon ;
//         this._tue = _tue ;
//         this._wed = _wed ;
//         this._thu = _thu ;
//         this._fri = _fri ;
//     }
// }
// let hours1 = new Hours(1,2,3,4,5);
// let trainer1 = new Trainers('nihal','english');
// let hour1 = new Hours(9,trainer1);
// let day1 = new Days('mon',hour1);
// let table1 = new Table(hour1);
// let class1 = new ClassRooms(1,table1);
// console.log(class1._table._days._hours._trainers._name);

//this part is working
// let trainer1 = new Trainers('nihal','english');
// let hour1 = new Hours(9,trainer1);
// let day1 = new Days('mon',hour1);
// let table1 = new Table(day1);
// let class1 = new ClassRooms(1,table1);
// console.log(class1._table._days._hours._trainers._name);

//we are using list here
let trainer2 = new Trainers ('najeeb','comp');
let trainer3 = new Trainers ('nair','hindi');
let trainer4 = new Trainers('athul','mal');
let day1 = new Days('mon',9,trainer2);
let day2 = new Days('mon',10,trainer3);
let day3 = new Days('mon',11,trainer4);
let daysArray = [];
daysArray.push(day1);
daysArray.push(day2);
daysArray.push(day3);
//let day1 = new Days('mon',daysArray);
let table1 = new Table(daysArray);
console.log(table1._days._hours);
const showTimeTable = () =>{
    let rows = '';
    table1._days.forEach(element => {
        rows+=`<tr> 
        <td>${element._trainers._name}<br>${element._trainers._subject}</td>
      
        </tr>`;
    });
    // create records
    // class1._table.forEach(u =>{
    //     rows += `<tr>
    //                 <td>${u.mon}</td>
    //                 <td>${u.tue}</td>
    //                 <td>${u.wed}</td>
    //                 <td>${u.thu} </td>
    //                 <td>${u.fri}</td>
    //             </tr>`;
    // });

    let table = `<table>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                    </tr>
                        ${rows}
                </table>`;
    
    document.getElementById('dv-users').innerHTML = table; 
}