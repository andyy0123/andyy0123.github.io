import React from 'react';
import { useForm } from 'react-hook-form';

import styles from '../style';

const Form = () => {
  const { register, handleSubmit, getValues, reset } = useForm();
  const [showRestQuestions, setShowRestQuestions] = React.useState(false);
  const [showAddress, setShowAddress] = React.useState(false);
  const [showEmail, setShowEmail] = React.useState(false);
  const [showNumOfChildren, setShowNumOfChildren] = React.useState(true);
  const [isDisabledSubmit, setIsDisabledSubmit] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async data => {
    if (!data.name.length || data.joinWedding === null) {
      return;
    }

    setIsSubmitting(true);

    const url =
      'https://script.google.com/macros/s/AKfycbwdSLJZS8YDRzrHxU7JrQh3ozxf7ROu5uIIQJQLyYhI9ZWGRUzgdt12q9v_5LWp6HA/exec';
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      crossDomain: true,
    };

    try {
      const res = await fetch(`${url}`, reqOptions);
      if (res.ok) {
        console.error('[RES NOT OK]', res);
        alert('不好意思，沒有填寫成功，請您重新送出。再不行請您私訊我們 ^^');
        reset();
        setShowRestQuestions(false);
        setShowAddress(false);
        setShowEmail(false);
        setShowNumOfChildren(true);
        setIsDisabledSubmit(true);
        setIsSubmitting(false);
        return;
      }
      alert('填寫成功');
      reset();
      setShowRestQuestions(false);
      setShowAddress(false);
      setShowEmail(false);
      setShowNumOfChildren(true);
      setIsDisabledSubmit(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('[ERROR]', err);
    }
  };

  const NameQ = () => {
    return (
      <div>
        <label
          htmlFor='name'
          className={`${styles.question}`}>
          姓名
        </label>
        <input
          {...register('name', {
            onChange: setBasicInfo,
          })}
          className={`${styles.textInput}`}
        />
      </div>
    );
  };

  const JoinWeddingQ = () => {
    return (
      <div>
        <div className={`${styles.question}`}>是否參加婚宴</div>
        <div className='mt-4 space-y-4'>
          <div className='flex items-center'>
            <input
              {...register('joinWedding', {
                onChange: setBasicInfo,
              })}
              type='radio'
              id='join-wedding'
              value={true}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>是</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('joinWedding', {
                onChange: setBasicInfo,
              })}
              type='radio'
              id='join-wedding'
              value={false}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>否</label>
          </div>
        </div>
      </div>
    );
  };

  const setBasicInfo = () => {
    const inputName = getValues('name');
    if (inputName.length && getValues('joinWedding')) {
      setIsDisabledSubmit(false);
      setShowRestQuestions(getValues('joinWedding') === 'true');
    } else {
      setShowRestQuestions(false);
      setIsDisabledSubmit(true);
    }
  };

  const InvitationTypeQ = () => {
    return (
      <div>
        <div className={`${styles.question}`}>是否需要喜帖</div>
        <div className='mt-4 space-y-4'>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ,
              })}
              type='radio'
              id='wedding-invitation'
              value='paper'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>紙本喜帖</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ,
              })}
              type='radio'
              id='wedding-invitation'
              value='elec'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>電子喜帖</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ,
              })}
              type='radio'
              id='wedding-invitation'
              value='both'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>我全都要</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ,
              })}
              type='radio'
              id='wedding-invitation'
              value='none'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>我不需要歐</label>
          </div>
        </div>
      </div>
    );
  };

  const selectInvitationTypeQ = () => {
    switch (getValues('weddingInvitation')) {
      case 'paper':
        setShowAddress(true);
        setShowEmail(false);
        break;
      case 'elec':
        setShowAddress(false);
        setShowEmail(true);
        break;
      case 'both':
        setShowAddress(true);
        setShowEmail(true);
        break;
      case 'none':
        setShowAddress(false);
        setShowEmail(false);
        break;
    }
  };

  const AddressQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>地址</label>
        <input
          {...register('address')}
          className={`${styles.textInput}`}
        />
      </div>
    );
  };

  const EmailQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>Email</label>
        <input
          {...register('email')}
          className={`${styles.textInput}`}
          placeholder='andy@titi.com'
        />
      </div>
    );
  };

  const RelationshipQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>與新人關係</label>
        <input
          {...register('relationship')}
          className={`${styles.textInput}`}
          placeholder='新娘閨蜜'
        />
      </div>
    );
  };

  const NumOfPeopleQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>出席人數</label>
        <select
          {...register('numOfPeople', {
            onChange: setNumOfPeople,
          })}
          className={`${styles.selectList}`}
          defaultValue='2'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
        </select>
        <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>含兒童人數</p>
      </div>
    );
  };

  const setNumOfPeople = () => {
    setShowNumOfChildren(getValues('numOfPeople') > 1);
  };

  const NumOfChildrenQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>兒童椅數量</label>
        <select
          {...register('numOfChildren')}
          className={`${styles.selectList}`}
          defaultValue='0'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
      </div>
    );
  };

  const ShuttleBusQ = () => {
    return (
      <div>
        <div className={`${styles.question}`}>需要搭乘交通車</div>
        <div className='mt-4 space-y-4'>
          <div className='flex items-center'>
            <input
              {...register('shuttleBus')}
              type='radio'
              id='shuttle-bus'
              value='false'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>不需要，自行前往</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('shuttleBus')}
              type='radio'
              id='shuttle-bus'
              value='true'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block font-medium text-gray-700'>需要，台北 &lt;-&gt; 宴會場地</label>
          </div>
        </div>
        <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>若人數過少而有變更，會另行通知。</div>
      </div>
    );
  };

  const VegetarianQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>需要素食餐點</label>
        <select
          {...register('vegetarian')}
          className={`${styles.selectList}`}
          defaultValue='0'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
        </select>
      </div>
    );
  };

  const BestWishQ = () => {
    return (
      <div>
        <label className={`${styles.question}`}>給新人的祝福</label>
        <textarea
          id='message'
          {...register('bestWish')}
          rows='4'
          className={`${styles.textarea}`}
          placeholder='寫下您真誠的祝福'></textarea>
      </div>
    );
  };

  const SubmitComponent = () => {
    return (
      <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
        <input
          type='submit'
          className={`inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white shadow-sm ${
            !isDisabledSubmit
              ? 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer'
              : 'cursor-not-allowed'
          }`}
          value='送出'
        />
      </div>
    );
  };

  const LoadingComponent = () => {
    return (
      <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
        <button
          disabled
          type='button'
          className='py-2.5 px-5 mr-2 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 inline-flex items-center'>
          <svg
            aria-hidden='true'
            role='status'
            className='inline w-4 h-4 mr-2 text-gray-200 animate-spin'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='#1C64F2'
            />
          </svg>
          Loading...
        </button>
      </div>
    );
  };

  return (
    <div
      id='form'
      className='w-full h-fit text-white'>
      <div
        id='formContainer'
        className={`pt-8 sm:px-8 bg-white`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='shadow-2xl w-full md:w-[60vh] mx-auto'>
            <div className='bg-white p-5 sm:p-6'>
              <div className='grid grid-cols-min100 gap-6'>
                <NameQ />
                <JoinWeddingQ />
                {showRestQuestions ? (
                  <>
                    <InvitationTypeQ></InvitationTypeQ>
                    {showAddress ? <AddressQ /> : null}
                    {showEmail ? <EmailQ /> : null}
                    <RelationshipQ></RelationshipQ>
                    <NumOfPeopleQ></NumOfPeopleQ>
                    {showNumOfChildren ? <NumOfChildrenQ /> : null}
                    <ShuttleBusQ></ShuttleBusQ>
                    <VegetarianQ></VegetarianQ>
                    <BestWishQ></BestWishQ>
                  </>
                ) : null}
              </div>
            </div>
            {!isSubmitting ? <SubmitComponent /> : <LoadingComponent />}
          </div>
        </form>
      </div>
      <div className={`hidden lg:block bg-main-bg ${styles.bgSettings}`}>
        <img className='hidden w-full h-full' />
      </div>
    </div>
  );
};

export default Form;
