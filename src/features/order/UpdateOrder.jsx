import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <div className="text-center">
      <fetcher.Form method="PATCH" className="inline-block">
        <Button type="primary">
          {fetcher.state === 'submitting' ? (
            <>
              <lord-icon
                src="https://cdn.lordicon.com/xjovhxra.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Updating...
            </>
          ) : (
            <>
              <lord-icon
                src="https://cdn.lordicon.com/yqzmiobz.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Make Priority
            </>
          )}
        </Button>
      </fetcher.Form>
    </div>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;