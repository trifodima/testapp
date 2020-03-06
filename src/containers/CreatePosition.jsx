import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePositions } from '../store/actons/actions';
import Input from '../components/ui/Input';
import { Button } from 'react-bootstrap';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';

const now = new Date().toISOString().substr(0, 10);

const options = [
  {
    id: 0,
    name: 'Select status...',
    value: 'default',
  }, {
    id: 1,
    name: 'Open',
    value: 'open',
  },{
    id: 2,
    name: 'Closed',
    value: 'closed',
  }
];

const initialFormData = {
  title: '',
  department: '',
  description: '',
  status: 'default',
  date: now
};
const initialFormErrors = {
  title: null,
  department: null,
  description: null,
  status: null,
  date: null,
};

class CreatePosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {...initialFormData},
      errors: {...initialFormErrors},
    }
  }
  validateTitle = (field) => {
      return field ? null: 'This field is required';
  };
  validateDepartment = (field) => {
    return field ? null: 'This field is required';
  };
  validateStatus = (field) => {
    return (field && field !== 'default') ? null: 'This field is required';
  };
  validateDate = (field) => {
    return field ? null: 'This field is required';
  };

  validateForm = (positions) => {
    this.setState({
      errors: {
        title: this.validateTitle(positions.title),
        department: this.validateDepartment(positions.department),
        description: null,
        status: this.validateStatus(positions.status),
        date: this.validateDate(positions.date),
      }
    });

    return !(this.validateTitle(positions.title)
      || this.validateDepartment(positions.department)
      || this.validateStatus(positions.status)
      || this.validateDate(positions.date));
  };

  clearFormData = () => {
    this.setState({
      formData: {...initialFormData},
      errors: {...initialFormErrors},
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { formData } = this.state;
    const positions = { id: Date.now(), ...formData };

    if (this.validateForm(positions)) {
      this.props.savePositions(positions);
      this.props.history.push('/confirmPositions');
    }
  };

  onSaveAndAddAnother = (event) => {
    event.preventDefault();
    const { formData } = this.state;
    const positions = { id: Date.now(), ...formData };

    if (this.validateForm(positions)) {
      this.props.savePositions(positions);
      this.clearFormData();
    }
  };

  changeField = (event) => {
    const { target: { value, name } } = event;

    this.setState(state => {
      const { formData } = state;

      formData[name] = value;

      return { formData };
    });
  };

  render() {
    const { errors } = this.state;
    const { title, department, description, status, date } = this.state.formData;

    return (
      <div className="page">
        <h1>Create one of more new Positions</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="title"
            label={'Title'}
            value={title}
            placeholder={'Title'}
            errorMessage={errors.title}
            onChange={this.changeField}
          />
          <Input
            name="department"
            label={'Department'}
            value={department}
            placeholder={'Department'}
            errorMessage={errors.department}
            onChange={this.changeField}
          />
          <Textarea
            name="description"
            label={'Description'}
            value={description}
            placeholder={'Description'}
            onChange={this.changeField}
          />
          <Select
            name="status"
            label={'Status'}
            value={status}
            errorMessage={errors.status}
            onChange={this.changeField}
          >
            {
              options.map(option => (
                <option key={option.id} value={option.value}>{option.name}</option>
              ))
            }
          </Select>

          <Input
            name="date"
            label={'Date'}
            type="date"
            errorMessage={errors.date}
            value={date}
            onChange={this.changeField}
          />
          <div className="button-wrapper">
            <Button
              size="lg"
              type="submit"
            >Save</Button>
          </div>
          <div className="button-wrapper">
            <Button
              size="lg"
              variant="secondary"
              onClick={this.onSaveAndAddAnother}
            >Save and Add Another</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    positions: state.positionsReducer,
  };
};
const mapDispatchToProps = {
  savePositions,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosition);
