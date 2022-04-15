import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Gap} from '..';
import {colors} from '../../../utils';

const CustomModal = ({
  label,
  icon,
  title,
  onBackdropPress,
  onSubmit,
  isVisible,
}) => {
  return (
    <Modal
      swipeDirection="left"
      animationInTiming={600}
      animationOutTiming={800}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <Gap height={24} />
        <View style={styles.content}>
          {icon}
          <Gap height={14} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Gap height={24} />
        <View style={styles.footer}>
          <View />
          <View style={styles.btnFooter}>
            <Button
              type="modal"
              title="Cancel"
              bgColor={colors.white}
              color={colors.grey}
              onPress={onBackdropPress}
            />
            <Gap width={4} />
            <Button
              type="modal"
              title="Submit"
              bgColor={colors.green}
              color={colors.white}
              onPress={onSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 24,
    margin: 0,
    borderRadius: 4,
  },
  modal: {
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: '#DEE2E6',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 0.5,
  },
  btnHeader: {
    padding: 4,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.grey,
  },
  label: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Poppins-Medium',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    padding: 12,
    borderWidth: 0.5,
    borderTopColor: '#DEE2E6',
  },
  btnFooter: {
    flexDirection: 'row',
  },
});
