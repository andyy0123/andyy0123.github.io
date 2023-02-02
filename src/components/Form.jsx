import React from 'react';
import { useForm } from 'react-hook-form';

// import { photosArr } from '../assets';
// import { ORIENTATION } from '../constants';

import styles from '../style';

const Form = () => {
  // const photos = photosArr.filter(photo => photo.orientation === ORIENTATION.vertical);
  // const photo = photos[Math.floor(Math.random() * photos.length)];

  const { register, handleSubmit, getValues } = useForm();
  const [showRestQuestions, setShowRestQuestions] = React.useState(false);
  const [showAddress, setShowAddress] = React.useState(false);
  const [showEmail, setShowEmail] = React.useState(false);

  const url =
    'https://script.google.com/macros/s/AKfycbwvXEa8cZHVJEzHX9EhlVmwIt4oZ-4---t6zyy7ocbr4quvwRAibrJZw56zRy-1aGfe/exec';
  const onSubmit = async data => {
    console.log(data);

    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      crossDomain: true,
    };

    try {
      const res = await fetch(`${url}`, reqOptions);
      if (!res.ok) {
        console.error('[RES NOT OK]', res);
        return;
      }
      const doc = await res.json();
      console.log('[RES]', doc);
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
            onChange: setBasicInfo
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
            <label className='ml-3 block text-sm font-medium text-gray-700'>是</label>
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
            <label className='ml-3 block text-sm font-medium text-gray-700'>否</label>
          </div>
        </div>
      </div>
    );
  };

  const setBasicInfo = () => {
    const inputName = getValues('name');
    if (inputName.length && getValues('joinWedding')) {
      setShowRestQuestions(true);
    } else {
      setShowRestQuestions(false);
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
                onChange: selectInvitationTypeQ
              })}
              type='radio'
              id='wedding-invitation'
              value='paper'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block text-sm font-medium text-gray-700'>紙本喜帖</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ
              })}
              type='radio'
              id='wedding-invitation'
              value='elec'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block text-sm font-medium text-gray-700'>電子喜帖</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ
              })}
              type='radio'
              id='wedding-invitation'
              value='both'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block text-sm font-medium text-gray-700'>我全都要</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('weddingInvitation', {
                onChange: selectInvitationTypeQ
              })}
              type='radio'
              id='wedding-invitation'
              value='none'
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block text-sm font-medium text-gray-700'>我不需要歐</label>
          </div>
        </div>
      </div>
    );
  };

  const selectInvitationTypeQ = () => {
    switch (getValues("weddingInvitation")) {
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
  }

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
          {...register('numOfPeople')}
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
              value={true}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block text-sm font-medium text-gray-700'>需要</label>
          </div>
          <div className='flex items-center'>
            <input
              {...register('shuttleBus')}
              type='radio'
              id='shuttle-bus'
              value={false}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label className='ml-3 block text-sm font-medium text-gray-700'>自行前往</label>
          </div>
        </div>
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

  return (
    <div
      id='form'
      className='w-full h-[100vh] text-white'>
      <div
        id='formContainer'
        className={`p-8 bg-bgNavy`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='shadow-2xl w-full md:w-[60vh] mx-auto'>
            <div className='bg-white p-5 sm:p-6'>
              <div className='grid grid-cols-min100 gap-6'>
                <NameQ></NameQ>
                <JoinWeddingQ></JoinWeddingQ>
                {showRestQuestions ? (
                  <>
                    <InvitationTypeQ></InvitationTypeQ>
                    {showAddress ? <AddressQ /> : null}
                    {showEmail ? <EmailQ /> : null}
                    <RelationshipQ></RelationshipQ>
                    <NumOfPeopleQ></NumOfPeopleQ>
                    <ShuttleBusQ></ShuttleBusQ>
                    <VegetarianQ></VegetarianQ>
                    <BestWishQ></BestWishQ>
                  </>
                ) : null}
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
              <input
                type='submit'
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              />
            </div>
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
