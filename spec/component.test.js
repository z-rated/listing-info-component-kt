/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Address from '../client/components/Address';
import Modal from '../client/components/Modal';
import GetDirections from '../client/components/GetDirections';
import Website from '../client/components/Website';
import PhoneNumber from '../client/components/PhoneNumber';

describe('Address Component', () => {
  it('should render address', () => {
    const wrapper = shallow(<Address data={data} />)

    expect(wrapper.find('[data-address-text]').text()).toEqual(data.location.address);
  });

  it('should render modal onClick', () => {
    const toggleModal = jest.fn();
    const wrapper = shallow(<Address data={data} toggleModal={toggleModal} />)

    wrapper.find('[data-address-text]').simulate('click');

    expect(toggleModal).toHaveBeenCalledTimes(1);
  });
});

describe('Modal Component', () => {
  it('should render modal', () => {
    const wrapper = shallow(<Modal data={data} />)

    expect(wrapper.find('[data-modal]').exists()).toBe(true);
  });

  it('should render map', () => {
    const wrapper = shallow(<Modal data={data} />)

    expect(wrapper.find('.get-dirs-btn').exists()).toBe(true);
    expect(wrapper.find('.get-dirs-btn').text()).toEqual('GET DIRECTIONS');
  });

  it('should render "Get Directions" button', () => {
    const wrapper = shallow(<Modal data={data} />)

    expect(wrapper.find('[data-modal-map]').exists()).toBe(true);
  });

  it('should close modal onClick', () => {
    const toggleModal = jest.fn();
    const wrapper = shallow(<Modal data={data} toggleModal={toggleModal} />)

    wrapper.find('.close-btn').simulate('click');

    expect(toggleModal).toHaveBeenCalledTimes(1);
  });

  it('should redirect to onClick', () => {
    window.location.assign = jest.fn();

    const wrapper = shallow(<Modal data={data} />)

    wrapper.find('.get-dirs-btn').simulate('click');

    expect(window.location.assign).toHaveBeenCalledTimes(1);
  });
});

describe('GetDirections Component', () => {
  it('should render button', () => {
    const wrapper = shallow(<GetDirections data={data} />)

    expect(wrapper.find('[data-link]').text()).toEqual('Get Directions');
  });

  it('should redirect onClick', () => {
    window.location.assign = jest.fn((link) => {
      expect(link).toEqual(`https://www.google.com/maps/place/${data.location.coords}`);
    });

    const wrapper = shallow(<GetDirections data={data} />);

    wrapper.find('[data-link]').simulate('click');

    expect(window.location.assign).toHaveBeenCalledTimes(1);
  });
});

describe('Website Component', () => {
  it('should render button', () => {
    const wrapper = shallow(<Website data={data} />)

    expect(wrapper.find('[data-website]').text()).toEqual(data.website);
  });

  it('should redirect onClick', () => {
    window.location.assign = jest.fn((link) => {
      expect(link).toEqual(data.website);
    });

    const wrapper = shallow(<Website data={data} />);

    wrapper.find('[data-website]').simulate('click');

    expect(window.location.assign).toHaveBeenCalledTimes(1);
  });
});

describe('PhoneNumber Component', () => {
  it('should render button', () => {
    const wrapper = shallow(<PhoneNumber data={data} />)

    expect(wrapper.find('[data-phone-number]').text()).toEqual(data.phone);
  });
});