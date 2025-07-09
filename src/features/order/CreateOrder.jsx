import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import EmptyCart from '../cart/components/ui/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className='mx-auto max-w-2xl px-4 py-8'>
      {/* Header */}
      <div className='mb-8 text-center'>
        <lord-icon
          src='https://cdn.lordicon.com/jnikqyih.json'
          trigger='loop'
          delay='2000'
          colors='primary:#10b981,secondary:#065f46'
          style={{ width: '64px', height: '64px', margin: '0 auto 16px' }}
        />
        <h2 className='mb-2 text-3xl font-bold text-slate-800 dark:text-slate-200'>
          Ready to Order?
        </h2>
        <p className='text-slate-600 dark:text-slate-400'>
          Let's get your delicious pizzas delivered!
        </p>
      </div>

      {/* Form */}
      <div className='rounded-2xl border border-emerald-200/50 bg-white/70 p-8 shadow-lg shadow-emerald-500/10 backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
        <Form method='POST' className='space-y-6'>
          {/* Name Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-300'>
              <lord-icon
                src='https://cdn.lordicon.com/hrjifpbq.json'
                trigger='hover'
                colors='primary:#10b981,secondary:#065f46'
                style={{ width: '20px', height: '20px' }}
              />
              <span>Full Name</span>
            </label>
            <input
              type='text'
              name='customer'
              defaultValue={username}
              required
              className='w-full rounded-xl border border-emerald-200 bg-white/50 px-4 py-3 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-emerald-800 dark:bg-slate-800/50'
            />
          </div>

          {/* Phone Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-300'>
              <lord-icon
                src='https://cdn.lordicon.com/srsgifqc.json'
                trigger='hover'
                colors='primary:#10b981,secondary:#065f46'
                style={{ width: '20px', height: '20px' }}
              />
              <span>Phone Number</span>
            </label>
            <input
              type='tel'
              name='phone'
              required
              className='w-full rounded-xl border border-emerald-200 bg-white/50 px-4 py-3 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-emerald-800 dark:bg-slate-800/50'
            />
            {formErrors?.phone && (
              <p className='flex items-center space-x-1 text-sm text-red-500'>
                <lord-icon
                  src='https://cdn.lordicon.com/akqsdstj.json'
                  trigger='hover'
                  colors='primary:#ef4444,secondary:#ef4444'
                  style={{ width: '16px', height: '16px' }}
                />
                <span>{formErrors.phone}</span>
              </p>
            )}
          </div>

          {/* Address Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-300'>
              <lord-icon
                src='https://cdn.lordicon.com/surcxhka.json'
                trigger='hover'
                colors='primary:#10b981,secondary:#065f46'
                style={{ width: '20px', height: '20px' }}
              />
              <span>Address</span>
            </label>
            <div className='relative'>
              <input
                type='text'
                name='address'
                disabled={isLoadingAddress}
                defaultValue={address}
                required
                className='w-full rounded-xl border border-emerald-200 bg-white/50 px-4 py-3 pr-32 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-50 dark:border-emerald-800 dark:bg-slate-800/50'
              />
              {!position.latitude && !position.longitude && (
                <span className='absolute right-2 top-1/2 -translate-y-1/2 transform'>
                  <Button
                    disabled={isLoadingAddress}
                    type='small'
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                  >
                    {isLoadingAddress ? (
                      <lord-icon
                        src='https://cdn.lordicon.com/xjovhxra.json'
                        trigger='loop'
                        colors='primary:#ffffff,secondary:#ffffff'
                        style={{ width: '16px', height: '16px' }}
                      />
                    ) : (
                      <>
                        <lord-icon
                          src='https://cdn.lordicon.com/surcxhka.json'
                          trigger='hover'
                          colors='primary:#ffffff,secondary:#ffffff'
                          style={{
                            width: '16px',
                            height: '16px',
                            marginRight: '4px',
                          }}
                        />
                        Get Position
                      </>
                    )}
                  </Button>
                </span>
              )}
            </div>
            {addressStatus === 'error' && (
              <p className='flex items-center space-x-1 text-sm text-red-500'>
                <lord-icon
                  src='https://cdn.lordicon.com/akqsdstj.json'
                  trigger='hover'
                  colors='primary:#ef4444,secondary:#ef4444'
                  style={{ width: '16px', height: '16px' }}
                />
                <span>{errorAddress}</span>
              </p>
            )}
          </div>

          {/* Priority Checkbox */}
          <div className='flex items-center space-x-3 rounded-xl border border-emerald-200/50 bg-emerald-50 p-4 dark:border-emerald-800/50 dark:bg-emerald-900/20'>
            <input
              type='checkbox'
              name='priority'
              id='priority'
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
              className='h-5 w-5 rounded border-emerald-300 bg-white text-emerald-600 focus:ring-2 focus:ring-emerald-500'
            />
            <label
              htmlFor='priority'
              className='flex cursor-pointer items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300'
            >
              <lord-icon
                src='https://cdn.lordicon.com/yqzmiobz.json'
                trigger='hover'
                colors='primary:#10b981,secondary:#065f46'
                style={{ width: '20px', height: '20px' }}
              />
              <span>Want to give your order priority?</span>
            </label>
          </div>

          {/* Hidden Inputs */}
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <input
            type='hidden'
            name='position'
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />

          {/* Order Summary */}
          <div className='space-y-3 rounded-xl bg-slate-50 p-6 dark:bg-slate-900/50'>
            <div className='flex items-center justify-between'>
              <span className='text-slate-600 dark:text-slate-400'>
                Subtotal:
              </span>
              <span className='font-semibold'>
                {formatCurrency(totalCartPrice)}
              </span>
            </div>
            {withPriority && (
              <div className='flex items-center justify-between'>
                <span className='text-slate-600 dark:text-slate-400'>
                  Priority fee:
                </span>
                <span className='font-semibold'>
                  {formatCurrency(priorityPrice)}
                </span>
              </div>
            )}
            <div className='flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700'>
              <span className='text-lg font-bold text-slate-800 dark:text-slate-200'>
                Total:
              </span>
              <span className='text-lg font-bold text-emerald-600 dark:text-emerald-400'>
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <Button disabled={isSubmitting || isLoadingAddress} type='primary'>
            {isSubmitting ? (
              <>
                <lord-icon
                  src='https://cdn.lordicon.com/xjovhxra.json'
                  trigger='loop'
                  colors='primary:#ffffff,secondary:#ffffff'
                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                />
                Placing Order...
              </>
            ) : (
              <>
                <lord-icon
                  src='https://cdn.lordicon.com/jnikqyih.json'
                  trigger='hover'
                  colors='primary:#ffffff,secondary:#ffffff'
                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                />
                Order Now for {formatCurrency(totalPrice)}
              </>
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
