import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { HiOutlineSearch } from 'react-icons/hi';
import {
  Searchbar as Header,
  Form,
  Button,
  Label,
  Field,
} from '../Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values, this.props.page);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Header className="searchbar">
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchQuery"
            />
            <ErrorMessage name="searchQuery" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              <Label>Search</Label>
              <HiOutlineSearch />
            </Button>
          </Form>
        )}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
