import React from 'react';
import clsx from 'clsx';
import globalStyles from 'src/styles/global.style';
import { Popup, TextBox } from 'devextreme-react';
import { makeStyles, Grid ,Box} from '@material-ui/core';
import { ButtonCancelPopup, ButtonConfirmPopup } from 'src/components/widget/buttons';
import LabelForm from 'src/components/widget/label-form-custom';
import { useSnackbar } from 'notistack';

export default function PopipInspectionCoupon(props: any) {
  const { open, onClose } = props;
  const global = globalStyles();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const onConfirm = () => {
    enqueueSnackbar('บันทึกข้อมูลเรียบร้อยแล้ว', { variant: 'success' });
    onClose()
  }
  return (
    <Popup
      visible={open}
      onHiding={onClose}
      dragEnabled={false}
      closeOnOutsideClick={true}
      showCloseButton={true}
      showTitle={true}
      title={'รับบัตรของขวัญ'}
      width={650}
      height={420}
      className={clsx(global.dxpopUp, classes.popupWithcontent)}
    >
      <div className={classes.divRoot}>
        <Grid container direction="row" spacing={2} alignItems="center" style={{ marginTop: '0.7rem' }}>
          <Grid item md={7}>
            <span className={classes.labelGrey}>เลขที่เอกสารขอผลิตบัตรของขวัญ:</span>
            <span className={classes.textValue}>{'HQIC-20210427-0001'}</span>
          </Grid>
          <Grid item md={5}>
            <span className={classes.labelGrey}>รหัสบัตรของขวัญ:</span>
            <span className={classes.textValue}>{'4000001'}</span>
          </Grid>
          <Grid item md={7}>
            <span className={classes.labelGrey}>ประเภทบัตรของขวัญ:</span>
            <span className={classes.textValue}>{'บัตรของขวัญ (Company)'}</span>
          </Grid>
          <Grid item md={5}>
            <span className={classes.labelGrey}>มูลค่าบัตรของขวัญ(บาท):</span>
            <span className={classes.textValue}>{'100'}</span>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} alignItems="center" style={{ marginTop: '1.5rem' }}>
          <Grid item md={2} style={{textAlign: 'right'}}>
            <span className={classes.labelTextbox}>จำนวนจากเอกสาร</span>
          </Grid>
          <Grid item md={5}>
            <LabelForm text="จำนวน(เล่ม)" required={true} popOver="" />
            <TextBox className={classes.dxTextbox} disabled value={'100'} />
          </Grid>
          <Grid item md={5}>
            <LabelForm text="จำนวน(ใบ)" required={true} popOver="" />
            <TextBox className={classes.dxTextbox} disabled value={'-'} />
          </Grid>
          <Grid item md={2} style={{textAlign: 'right'}}>
            <span className={classes.labelTextbox}>จำนวนรับเข้า</span>
          </Grid>
          <Grid item md={5}>
            <TextBox className={classes.dxTextbox} defaultValue={60} />
          </Grid>
          <Grid item md={5}>
            <TextBox className={classes.dxTextbox} />
          </Grid>
          <Box mt='1.5rem'>
              <span className={classes.labelRemark}>หมายเหตุ : ให้ระบุจำนวนรับเป็นจำนวนเล่ม หากผู้ผลิตส่งมาเป็นจำนวนใบให้ใส่จำนวนใบ</span>
          </Box>
        </Grid>
        <div className={classes.divButtons}>
          <ButtonCancelPopup style={{ marginRight: '0.5rem' }} onClick={onClose} />
          <ButtonConfirmPopup style={{ marginLeft: '0.5rem' }} onClick={onConfirm} />
        </div>
      </div>
    </Popup>
  );
}

const useStyles = makeStyles(() => ({
  dxTextbox: {
    '&.dx-state-disabled': {
      opacity: 1,
      border: 'unset',
      backgroundColor: '#E8E9E9',
    },
    '&.dx-widget input, .dx-widget textarea': {
      textAlign: 'end',
      font: 'normal normal normal 14px/21px Prompt',
    },
    '& .dx-texteditor.dx-editor-outlined': {
      border: '1px solid #C6C7CE',
    },
  },
  divAlign: {
    alignSelf: 'center',
    marginTop: '1rem',
  },
  divRoot: {
    padding: '1rem 3rem 1rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textValue: {
    font: 'normal normal normal 12px/18px Prompt',
    color: '#F26529',
    marginLeft: '7px',
  },
  labelTextbox: {
    font: 'normal normal normal 10px/15px Prompt',
    color: '#4D4D4F',
  },
  labelRemark: {
    font: 'normal normal normal 10px/15px Prompt',
    color: '#4D4D4F',
  },
  labelGrey: {
    marginRight: '8px',
    font: 'normal normal normal 12px/18px Prompt',
    color: '#4D4D4F',
  },
  divButtons: {
    alignSelf: 'end',
    marginTop: '1.8rem',
  },
  popupWithcontent: {
    '& .dx-popup-content': {
      padding: 'unset',
    },
  },
}));
