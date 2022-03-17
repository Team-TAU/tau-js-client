export interface NewFollower extends TauEventBase {
  event_type: 'channel-follow';
  event_data: {
    user_id: '536397236';
    user_name: 'FiniteSingularity';
    user_login: 'finitesingularity';
    followed_at: '2022-03-03T20:11:27.701494288Z';
    broadcaster_user_id: '143178148';
    broadcaster_user_name: 'BroccoDev';
    broadcaster_user_login: 'broccodev';
  };
}

export interface TauEventBase {
  id: '157db3aa-8b8f-4b08-893c-9c275a7b6ea9';
  event_id: string;
  event_type: string;
  event_source: string;
  created: string; //"2022-03-03T20:11:27+0000",
  origin: string; // 'twitch' << official   from tau >> replay || test
}
