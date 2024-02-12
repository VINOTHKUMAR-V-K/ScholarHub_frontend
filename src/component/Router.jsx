import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'

//Student Components

import Studentsform from './Studentsform'
import StudentAcdmicInfo from './StudentAcdmicInfo'
import StudentDocument from './StudentDocument'
import Maincom from './Maincom'
import BankDetails from './BankDetails'
//admin
import AdminDemo from './AdminDemo'
import UserDemo from './UserDemo'
import { StudentList } from './StudentList'
import ApprovedStu from './ApprovedStu'
import { RejectedStu } from './RejectedStu'


//instution Components
// import Instution from './Institute/Instution'
// import ReqStdDetails from './Institute/ReqStdDetails'

//admin 

const Router = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    {/* StudentComponets */}
                    <Route exact path='/' element={<UserDemo/>} />
                    <Route  path='/home' element={<Maincom/>} />
                    <Route path='/studentform' element={<Studentsform/>}/>
                    <Route path='/studentAcdemic' element={<StudentAcdmicInfo/>}/>
                    <Route path='/documentsubmission' element={<StudentDocument/>}/>
                    <Route path='/bank' element={<BankDetails/>}/>
                    {/* //router */}
                    <Route path='/adminportal' element={<AdminDemo/>}/>
                    <Route path='/stulist' element={<StudentList/>}/>
                    <Route path='/approved' element={<ApprovedStu/>}/>
                    <Route path='/reject' element={<RejectedStu/>}/>
                    {/* InstutionComponents
                    <Route path="/institution" element={<Instution/>} />
                    <Route path="/RequestStatus" element={<ReqStdDetails/>}/> */}

                </Routes>


        </BrowserRouter>
    </div>
  )
}

export default Router