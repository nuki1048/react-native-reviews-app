import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { globalStyles } from '../../styles/global';
import { Formik, FormikHelpers } from 'formik';
import { Review } from '../home/home';
import * as yup from 'yup';
import FlatButton from '../../shared/flatButton/flatButton';
import { ReviewFormProps } from './reviewForm.props';

interface FormikValues {
  title: string;
  body: string;
  rating: string;
}

const reviewSchema = yup.object<FormikValues>({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Your number needs to be between 1 to 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ onSubmit }: ReviewFormProps): JSX.Element {
  const initialValuesFormik: FormikValues = {
    title: '',
    body: '',
    rating: '',
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Formik
          initialValues={initialValuesFormik}
          validationSchema={reviewSchema}
          onSubmit={(
            values: FormikValues,
            actions: FormikHelpers<FormikValues>
          ) => {
            const review: Review = {
              title: values.title,
              body: values.body,
              key: Math.random().toString(),
              rating: parseInt(values.rating),
            };

            onSubmit(review);
            actions.resetForm();
          }}
        >
          {(formikProps) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Review title'
                onBlur={formikProps.handleBlur('title')}
                onChangeText={formikProps.handleChange('title')}
                value={formikProps.values.title}
              />
              {formikProps.touched.title && formikProps.errors.title ? (
                <Text style={globalStyles.errorText}>
                  {formikProps.errors.title}
                </Text>
              ) : null}
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder='Review body'
                onBlur={formikProps.handleBlur('body')}
                onChangeText={formikProps.handleChange('body')}
                value={formikProps.values.body}
              />
              {formikProps.touched.body && formikProps.errors.body ? (
                <Text style={globalStyles.errorText}>
                  {formikProps.errors.body}
                </Text>
              ) : null}
              <TextInput
                style={globalStyles.input}
                placeholder='Rating (1-5)'
                onBlur={formikProps.handleBlur('rating')}
                onChangeText={formikProps.handleChange('rating')}
                value={formikProps.values.rating}
                keyboardType='numeric'
              />
              {formikProps.touched.rating && formikProps.errors.rating ? (
                <Text style={globalStyles.errorText}>
                  {formikProps.errors.rating}
                </Text>
              ) : null}
              <FlatButton
                text='Submit'
                onPress={formikProps.handleSubmit as any}
              />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
