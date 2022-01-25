import { Box, Typography, IconButton, makeStyles, Grid } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import Popup from 'devextreme-react/popup';
import React from 'react';
import globalStyles from 'src/styles/global.style';
import { ButtonCancelPopup, ButtonConfirmPopup } from 'src/components/widget/buttons';
import clsx from 'clsx';

interface IConfirm {
  onClose: any;
  open: boolean;
  onConfirm: any;
  docNo: string;
  qtyBook: number;
  couponValue: string; // เปลี่ยนเป็น number เมื่อ binding
}

const PopupConfirmInspection = (props: IConfirm) => {
  const { open, docNo, onClose, onConfirm, qtyBook, couponValue } = props;
  const global = globalStyles();
  const classes = useStyles();

  return (
    <Popup
      visible={open}
      onHiding={onClose}
      dragEnabled={false}
      closeOnOutsideClick={true}
      showCloseButton={true}
      showTitle={true}
      title={'ยืนยัน'}
      width={450}
      height={320}
      className={clsx(global.dxpopUp, classes.popupWithcontent)}
    >
      <div className={classes.divRoot}>
        <div className={classes.divAlign}>
          <IconButton className={classes.checkIcon} size="small">
            <Check className={classes.iconStyle} />
          </IconButton>
        </div>
        <Box mt={2} mb={'15px'} className={classes.divAlign}>
          <Typography style={{ fontWeight: 500 }} className={global.font14}>
            ยืนยันการรับบัตรของขวัญ
          </Typography>
        </Box>
        <Grid container className={classes.divAlign}>
          <Grid item md={7}>
            <span className={classes.labelGrey}>เลขที่เอกสารขอผลิตบัตรของขวัญ:</span>
          </Grid>
          <Grid item md={5}>
            <span className={classes.normalOrange}>{docNo}</span>
          </Grid>
          <Grid item md={7} style={{ marginTop: '1rem' }}>
            <span className={classes.labelGrey}>มูลค่าคูปอง (บาท)</span>
            <span className={classes.normalOrange}>{couponValue}</span>
          </Grid>
          <Grid item md={5} style={{ marginTop: '1rem' }}>
            <span className={classes.labelGrey}>จำนวนเล่ม</span>
            <span className={classes.normalOrange}>{qtyBook}</span>
          </Grid>
        </Grid>
        <div className={classes.divButtons}>
          <ButtonCancelPopup style={{ marginRight: '0.5rem' }} onClick={onClose} />
          <ButtonConfirmPopup style={{ marginLeft: '0.5rem' }} onClick={onConfirm} />
        </div>
      </div>
    </Popup>
  );
};
const useStyles = makeStyles(() => ({
  divAlign: {
    alignSelf: 'center',
  },
  divRoot: {
    padding: '1rem 3rem 1rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  normalOrange: {
    font: 'normal normal normal 14px/21px Prompt',
    color: '#F26529',
  },
  labelGrey: {
    marginRight: '8px',
    font: 'normal normal normal 12px/18px Prompt',
    color: '#4D4D4F',
  },
  divButtons: {
    alignSelf: 'center',
    marginTop: '1.8rem',
  },
  divWarning: {
    backgroundColor: 'white',
  },
  iconStyle: {
    fontSize: '2rem',
    color: 'white',
  },
  checkIcon: {
    backgroundColor: '#228B22',
    padding: '10px',
  },
  popupWithcontent: {
    '& .dx-popup-content': {
      padding: 'unset',
    },
  },
}));
export default PopupConfirmInspection;
