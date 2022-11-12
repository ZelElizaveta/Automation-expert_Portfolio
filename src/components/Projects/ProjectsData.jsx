import pr_ome_one from '../../IMG/IMG/Projects/CRG_1/2_01.webp';
import pr_ome_two from '../../IMG/IMG/Projects/CRG_1/2_02.webp';
import pr_ome_thr from '../../IMG/IMG/Projects/CRG_1/2_03.webp';
import pr_ome_four from '../../IMG/IMG/Projects/CRG_1/2_04.webp';
import pr_ome_five from '../../IMG/IMG/Projects/CRG_1/2_05.webp';

import pr_two_one from '../../IMG/IMG/Projects/CRG_2/3_01 (1).webp';
import pt_two_two from '../../IMG/IMG/Projects/CRG_2/3_02.webp';
import pr_two_three from '../../IMG/IMG/Projects/CRG_2/3_03.webp';


import pr_three_one from '../../IMG/IMG/Projects/GOU/1_01.webp';
import pr_three_two from '../../IMG/IMG/Projects/GOU/1_02.webp';
import pr_three_thr from '../../IMG/IMG/Projects/GOU/1_03.webp';
import pr_three_four from '../../IMG/IMG/Projects/GOU/1_04.webp';
import pr_three_five from '../../IMG/IMG/Projects/GOU/1_05.webp';
import pr_three_six from '../../IMG/IMG/Projects/GOU/1_06.webp';


import pr_five_two from '../../IMG/IMG/Projects/PLA/5_03.webp';
import pr_five_thr from '../../IMG/IMG/Projects/PLA/5_04.webp';
import pr_five_four from '../../IMG/IMG/Projects/PLA/5_06.webp';
import pr_five_five from '../../IMG/IMG/Projects/PLA/5_08.webp';
import pr_five_six from '../../IMG/IMG/Projects/PLA/5_09.webp';

import pr_six_one from '../../IMG/IMG/Projects/UPFS/01_общий вид Выпарная установка.webp';
import pr_six_two from '../../IMG/IMG/Projects/UPFS/01_общий вид Отделение регенерации.webp';
import pr_six_thr from '../../IMG/IMG/Projects/UPFS/24 состояния оборудования.webp';
import pr_six_four from '../../IMG/IMG/Projects/UPFS/01_Аналог/04 основное окно.webp';
import pr_six_five from '../../IMG/IMG/Projects/UPFS/01_Аналог/05 окно сообщений.webp';
import pr_six_six from '../../IMG/IMG/Projects/UPFS/01_Аналог/06 окно графиков.webp';
import pr_six_svn from '../../IMG/IMG/Projects/UPFS/01_Аналог/07 окно настроек 1.webp';
import pr_six_nin from '../../IMG/IMG/Projects/UPFS/01_Аналог/08 окно настроек 2.webp';


import pr_svn_one from '../../IMG/IMG/Projects/VOGA/01_Гидрохимия_14_10_2021.webp';
import pr_svn_two from '../../IMG/IMG/Projects/VOGA/02_21_09_2021.webp';
import pr_svn_thr from '../../IMG/IMG/Projects/VOGA/03_21_09_2021.webp';
import pr_svn_four from '../../IMG/IMG/Projects/VOGA/04_Сушка_14_10_2021.webp';

const ProjectsData = [
    {
      title: 'Casting machine for cylindrical ingots',
      descrp: 'Casting machine for cylindrical ingots. \n The control system consists of SIMATIC S7-1500 PLC, SIMATIC Comfort Panel, Sinamics G120. \n The PLC programming language is SCL, technological objects are also used: SpeedAxis, PID controller.  \n The best practices were used in the development: the SIMATIC Basic Process Library (LBP), HMI Template Suite, the LAxisCtrl library.',
      imgs: [pr_five_two, pr_five_thr, pr_five_four, pr_five_five, pr_five_six]
    },
    {
      title: 'Chemical production',
      descrp: 'The control system consists of SIMATIC S7-1500 PLC, ET 200MP, redundant SCADA WinCC Professional servers. The PLC programming language is SCL. Best practices were used in the development: UDT, FacePlate, SIMATIC Library of Basic Processes (LBP), HMI Template Suite. Generating tags, messages and FacePlate by SiVArc. Tracking of all operator actions and changes in the states and statuses of all equipment.',
      imgs: [pr_six_one, pr_six_two, pr_six_thr, pr_six_four, pr_six_five, pr_six_six, pr_six_svn, pr_six_nin]
    },
    {
      title: 'Flame retardant',
      descrp: 'Production of flame retardants. The control system consists of SIMATIC S7-1500 PLC, ET 200MP, redundant SCADA WinCC Professional servers. The PLC programming language is SCL. Multiple reports and flexible production structure. UDT, FacePlate, and Library technology are used. Tracking of all operator actions and changes in the states and statuses of all equipment.',
      imgs: [pr_svn_one, pr_svn_two, pr_svn_thr, pr_svn_four]
    },
    {
      title: 'SCADA for gas cleaning for BrAZ',
      descrp: 'SCADA for gas cleaning units for the Bratsk Aluminum Plant. SCADA consists of redundant servers, several clients and many web clients. 34,000 tags, almost 20 thousand messages, several thousand archive tags. \n UDT, FacePlate, and Library technology are used. \n Tracking of all operator actions and changes in the states and statuses of all equipment included in gas cleaning units.',
      imgs: [pr_three_thr, pr_three_four, pr_three_five, pr_three_one, pr_three_two, pr_three_six]
    },
    {
      title: 'Alumina transfer system for BrAZ',
      descrp: 'Alumina transfer system for the Bratsk Aluminum Plant. \n Here is the WinCC project, which is connected to more than 30 local subsystems. \n The project has more than 13,000 tags and 5,000 messages. \n FacePlate and Library technology is used. \n The following features are implemented: \n 1.  Remote switching of operating modes for local subsystems; \n 2. Remote control from SCADA using web clients; \n 3. Storing and filtering messages and trends of all local subsystems;',
      imgs: [pr_ome_five, pr_ome_one, pr_ome_two,pr_ome_four, pr_ome_thr]
    },
    {
      title: 'Alumina transfer system for IrkAZ',
      descrp: 'Alumina transfer system for Irkutsk Aluminum Plant. A comprehensive project for PLC, HMI, SCADA. \n The programming language used for the PLC is SCL. \n A library of PLC blocks, screens and FacePlate for HMI and SCADA has been created.',
      imgs: [pr_two_three, pr_two_one, pt_two_two]
    },
    
    
]

export default ProjectsData