import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import botIcon from './botUmb.png';
import logoImage from './umbPolos.png';

const config = {
  width: '400px',
  height: '500px',
  floating: true,
};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'linear-gradient(to right, #8a2387, #e94057, #f27121);', 
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'linear-gradient(to right, #e44d26, #f16529)',
  botFontColor: '#fff',
  userBubbleColor: '#2c9d2e',
  userFontColor: '#fff',
};

const steps = [
  {
    id: '13',
    message: 'Assalamualaikum adik sanak segalonyo, ado yang pacak kami bantu dak?',
    trigger: '15',
  },
  {
    id: '15',
    options: [
      { value: 1, label: 'Iyo ambo ndak betanyo', trigger: '12' },
      { value: 2, label: 'Idak, cuma ndak ngetes ajo ambo kesiko', trigger: '16' },
    ],
  },
  {
    id: '16',
    message: 'Oh iyo lah kalu cak itu, mokasi banyak la bekunjung ke tempek kami',
    trigger: '17',
  },
  {
    id: '17',
    message: 'Wassalamualaikum Wr. Wb.',
    trigger: '18',
  },
  {
    id: '18',
    options: [
      { value: 1, label: 'Ndak Betanyo', trigger: '13' },
      { value: 2, label: 'Udem eh', end: true },
    ],
  },
  {
    id: '12',
    message: 'Na kalu ndak betanyo, tolong tulis dulu siapo namo kamu dibawah ini sanak?',
    trigger: '10',
  },
  {
    id: '10',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'Sanak {previousValue}, mokasih la kesiko!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Ikona daftar pertanyaan yang pacak kamu tanyo, klik ke bae kelak ado jawaban e',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Berapo UKT di Teknik Informatika?', trigger: '4' },
      { value: 2, label: 'Jurusan TI kuliahnyo dikampus mano?', trigger: '3' },
      { value: 3, label: 'Siapo dekan kito kini?', trigger: '5' },
      { value: 13, label: 'Kalo akreditasi Teknik Informatika di UMB tu apo weh?', trigger: '14' },
    ],
  },
  {
    id: '7',
    message: 'Masih ndak betanyo sanak?',
    trigger: '8',
  },
  {
    id: '14',
    message: 'Kalo Akreditasi jurusan Teknik Informatika di UMB tu "Baik Sekali"',
    trigger: '8',
  },
  {
    id: '8',
    options: [
      { value: 1, label: 'Nanyo lagi', trigger: '2' },
      { value: 2, label: 'La tejawab, jadila', trigger: '6' },
    ],
  },
  {
    id: '6',
    message: 'Mokasi nian la datang ke ChatBot kami ko sanak yo!',
    trigger: 'feedback',
  },
  {
    id: 'feedback',
    message: 'Tolong dulu sanak, berapo kekiro bintang yang ndak kamu kasih ke layanan ChatBot PMB UMB ni?',
    trigger: 'feedbackOptions',
  },
  {
    id: 'feedbackOptions',
    options: [
      { value: '1', label: '⭐ Alangke buruk nyo', trigger: 'feedbackResponse' },
      { value: '2', label: '⭐⭐ Kurang masuk', trigger: 'feedbackResponse' },
      { value: '3', label: '⭐⭐⭐ Bole la', trigger: 'feedbackResponse' },
      { value: '4', label: '⭐⭐⭐⭐ Padek', trigger: 'feedbackResponse' },
      { value: '5', label: '⭐⭐⭐⭐⭐ Padek nian cik', trigger: 'feedbackResponse' },
    ],
  },
  {
    id: 'feedbackResponse',
    message: 'Mokasih nian la ndak ngasih Bintang ke ChatBot PMB UMB sanak, Wassalamualaikum Wr. Wb.',
    trigger: '18',
  },
  {
    id: '3',
    message: 'Kalo kamu kuliah di jurusan Teknik Informatika, kamu bakal kuliah di Kampus 1 Kampung Bali sanak',
    trigger: '7',
  },
  {
    id: '4',
    message: 'Biaya UKT di teknik informatika tu Rp. 3.850.000 (tigo juta lapan ratus limo puluh ribu rupiah) per semester',
    trigger: '7',
  },
  {
    id: '5',
    message: 'Dekan kito kini pak RG. Guntur Alam, S.Kom, M.Kom, Ph.D',
    trigger: '7',
  },
];

const SimpleForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="ChatBot Kito UMB"
        botAvatar={botIcon}
        style={{
          backgroundImage: `url(${logoImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center 20px',
          top: '50px',
        }}
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
};

export default SimpleForm;
