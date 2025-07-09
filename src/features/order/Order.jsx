import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher]
  );
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4">
          <lord-icon
            src="https://cdn.lordicon.com/uukerzzv.json"
            trigger="loop"
            delay="2000"
            colors="primary:#10b981,secondary:#065f46"
            style={{ width: '64px', height: '64px', margin: '0 auto' }}
          />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-slate-800 dark:text-slate-200">
          Order #{id}
        </h2>
        {/* Status Badges */}
        <div className="mb-4 flex items-center justify-center space-x-4">
          <span
            className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-semibold ${
              status === 'preparing'
                ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
            }`}
          >
            <lord-icon
              src={
                status === 'preparing'
                  ? 'https://cdn.lordicon.com/xjovhxra.json'
                  : 'https://cdn.lordicon.com/oqdmuxru.json'
              }
              trigger="loop"
              colors={
                status === 'preparing'
                  ? 'primary:#ea580c,secondary:#ea580c'
                  : 'primary:#16a34a,secondary:#16a34a'
              }
              style={{ width: '20px', height: '20px' }}
            />
            <span>
              {status === 'preparing' ? 'Preparing Order' : 'Out for Delivery'}
            </span>
          </span>
          {priority && (
            <span className="flex items-center space-x-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-900/30 dark:text-red-400">
              <lord-icon
                src="https://cdn.lordicon.com/yqzmiobz.json"
                trigger="loop"
                colors="primary:#dc2626,secondary:#dc2626"
                style={{ width: '20px', height: '20px' }}
              />
              <span>Priority Order</span>
            </span>
          )}
        </div>
        {/* Delivery Info */}
        <div className="inline-block rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
          <p className="flex items-center space-x-2 font-medium text-emerald-700 dark:text-emerald-300">
            <lord-icon
              src="https://cdn.lordicon.com/abvsilkn.json"
              trigger="hover"
              colors="primary:#059669,secondary:#059669"
              style={{ width: '20px', height: '20px' }}
            />
            <span>
              {deliveryIn >= 0
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                : 'Order should have arrived'}
            </span>
          </p>
          <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>
      </div>
      {/* Order Items */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-emerald-200/50 bg-white/70 shadow-lg shadow-emerald-500/10 backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70">
        <div className="border-b border-emerald-200/30 p-6 dark:border-emerald-800/30">
          <h3 className="flex items-center space-x-2 text-xl font-bold text-slate-800 dark:text-slate-200">
            <lord-icon
              src="https://cdn.lordicon.com/wloilxuq.json"
              trigger="hover"
              colors="primary:#10b981,secondary:#065f46"
              style={{ width: '24px', height: '24px' }}
            />
            <span>Order Details</span>
          </h3>
        </div>
        <div className="divide-y divide-emerald-200/30 dark:divide-emerald-800/30">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingIngredients={fetcher.state === 'loading'}
              ingredients={
                fetcher?.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}
        </div>
      </div>
      {/* Price Summary */}
      <div className="mb-8 rounded-2xl bg-slate-50 p-6 dark:bg-slate-900/50">
        <h3 className="mb-4 flex items-center space-x-2 text-lg font-bold text-slate-800 dark:text-slate-200">
          <lord-icon
            src="https://cdn.lordicon.com/qhgmphtg.json"
            trigger="hover"
            colors="primary:#10b981,secondary:#065f46"
            style={{ width: '24px', height: '24px' }}
          />
          <span>Price Breakdown</span>
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-slate-400">
              Pizza price:
            </span>
            <span className="font-semibold">{formatCurrency(orderPrice)}</span>
          </div>
          {priority && (
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Priority price:
              </span>
              <span className="font-semibold">
                {formatCurrency(priorityPrice)}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
            <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
              To pay on delivery:
            </span>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              {formatCurrency(orderPrice + priorityPrice)}
            </span>
          </div>
        </div>
      </div>
      {/* Update Order */}
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
